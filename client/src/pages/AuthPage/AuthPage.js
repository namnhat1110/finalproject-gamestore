import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import { authActions } from '../../redux/actions';
import { Container, Form, Button } from 'react-bootstrap'

const RegisterPage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [user, setUser] = useState({ email: "", password: "" });
    const [show, setShow] = useState(false);

    const onToggleModal = (e) => {
        e.preventDefault();
        setShow(!show);
    };
    const onLogin = (e) => {
        e.preventDefault();
        dispatch(authActions.loginRequest(user.email, user.password));
    };
    const onChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(authActions.register(user))
    }
    // console.log({ isAuthenticated })
    // if (isAuthenticated) return <Redirect to="/" />;

    return (
        <div>
            <Container className="my-5">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default RegisterPage