import Table from "react-bootstrap/Table";
// import { useEffect } from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function DarkExample() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate()
  useEffect(() => {
    console.log("effet called ");
    fetchData();
  }, []);

const adminInfo = useSelector((state)=>state.adminAuth);
console.log(adminInfo,"please.....................");

  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await fetch("/api/admins/allUsers");
      
      const data = await response.json();
      
      const userArray = Object.values(data);
      
      setUsers(userArray);
      dispatch()
    } catch (err) {
      console.log(err);
    }
  };
  const fetchDeleteData = async (id) =>{
    console.log(id,'hiuhiuhihioho');
    try {
      const response = await fetch(`/api/admins/delete/${id}`)
      console.log(response.json());
      navigate('/admin/all-users')
    } catch (err) {
      console.log(err);
    }
  }
const deleteHandler =(id)=>{
  console.log('/????????')
  fetchDeleteData(id);
}
// const dispatch = useDispatch()
const fetchEditData = async(id)=>{
  try {
    const response = await fetch(`/api/admins/getuserdata/${id}`)
    // dispatch()

    console.log(response,"this is response..");
    navigate('/admin/all-users')
    } catch (error) {
      console.log(error);
    }
}

const editHandler=(id)=>{
  fetchEditData(id);
}


  return (

    <>
    <Link to='/admin/add-users' className="mt-4">Add User</Link>
    <Table striped bordered hover variant="dark" className="mt-3">
      <thead>
        <tr>
          <th>index</th>
          <th>User name</th>
          <th>email id</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users && users.length > 0 ? (
          users.map((users, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{users.name}</td>
              <td>{users.email}</td>
           
              <td>
                <button  onClick={()=>{deleteHandler(users._id)}}> Delete</button>
                <Link to={`/admin/edit/${users._id}`} > edit</Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No users found</td>
          </tr>
        )}
      </tbody>
    </Table>
    </>
    
  );
}

export default DarkExample;
