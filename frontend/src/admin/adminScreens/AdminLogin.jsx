import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../AdminSlices/AdminsApiSlice";
import { setAdminCredentials } from "../AdminSlices/AuthSlice";
import { toast } from "react-toastify";
// import Loader from '../../components/Loader';

const AdminLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adminInfo = useSelector((state) => state.adminauth);
  console.log("rendering.....");
  useEffect(() => {
    if (adminInfo) {
      navigate("/admin");
    } else {
      toast.error("try again");
    }
  }, []);

  const [login] = useLoginMutation();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      console.log("oopuhhhhhhhhhhhhhuys");
      console.log(res, "oootttttt");
      if (!res.data) {
        navigate("/admin/login");
      } else {
        console.log("else block");
        dispatch(setAdminCredentials({ res }));
        const result = localStorage.getItem("adminInfo");
        console.log(result, "local storage data");
        // const adminData = await result.json();
        const data = JSON.parse(result)
        console.log(data.res.data, "}}}}}}}}}}}}}}}}");
        const admin=data.res.data;
        dispatch(setAdminCredentials({admin}));
        navigate("/admin/all-users");
      }
      // navigate('/admin/all-users')
    } catch (err) {
      console.log("ggggggggggggggggggggggggggggg");
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <FormContainer>
      <h1>sign in</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* {isLoading && <Loader />} */}

        <Button type="submit" variant="primary" className="mt-3">
          sign in
        </Button>

        <Row className="py-3">
          <Col>
            New Customer? <Link to="/register">Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default AdminLoginScreen;
