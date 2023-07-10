import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
// import { useGetuserdataMutation } from "../AdminSlices/AdminsApiSlice";
import { useEdituserdataMutation } from "../AdminSlices/AdminsApiSlice";

// import { setAdminCredential } from '../AdminSlices/authSlice';
import { setAdminCredentials } from "../AdminSlices/AuthSlice";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();

  console.log(id, "pppppppp");
  const fetchUserData = async (id) => {
    console.log(id, "hiuhiuhihioho");
    try {
      const response = await fetch(`/api/admins/edit/${id}`);
      const res = await response.json();
      console.log(res, "qqqqqqqqqqq");
      //  name = res.name
      setName(res.name);
      setEmail(res.email);
      //   navigate('/admin/all-users')
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUserData(id);
  }, []);

  // const fetchUpdateUserData = async (id) =>{
  //         console.log(id,'hiuhiuhihioho');
  //         try {
  //           const response = await fetch(`/api/admins/edit/${id}`)
  //           const res = await response.json()
  //           console.log(res,"qqqqqqqqqqq");
  //         //  name = res.name
  //         setName(res.name)
  //         setEmail(res.email)
  //         //   navigate('/admin/all-users')
  //         } catch (err) {
  //           console.log(err);
  //         }
  // }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  //   const [password,setPassword] = useState('')
  const [edituser, { isLoading }] = useEdituserdataMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adminInfo = useSelector((state) => state.adminauth);

  useEffect(() => {
    if (adminInfo) {
      navigate("/admin/login");
    } else {
      console.log("adminInfo is empty");
    }
  }, [navigate, adminInfo]);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const data = 
      {
        name: name,
        email: email,
      }
      console.log(data)

    //   const res= await edituser(id,data)
    //   console.log(res,"ppp");
    //   if(!res.data){

    //   }
    const response = await fetch(
        `http://localhost:5000/api/admins/updateuser/${id}`,
        {
          method: "POST", // or 'PUT'
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      const result = await response.json();
      console.log("Success:", result);
      if(result){
        navigate('/admin/all-users')
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <FormContainer>
      <h1>User</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader />}

        <Button type="submit" variant="primary" className="mt-3">
          update
        </Button>
      </Form>

      {/* <Row className='py-3'>
          <Col>
            Already have an account? <Link to={`admin/login`}>Login</Link>
          </Col>
        </Row> */}
    </FormContainer>
  );
};

export default EditUser;
