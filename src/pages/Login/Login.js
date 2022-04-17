import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
          navigate('/home')
      }

    const handleSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword (email, password);
    }

    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-center text-primary mt-4'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password"/>
                </Form.Group>
                <Button className='mx-auto w-50 d-block' onClick={handleSubmit} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Photo Photo Galleria? <Link to='/register' className='btn btn-link text-primary pu-auto text-decoration-none'>Please Register</Link></p>
            <p className=''>Forget Password? <button className='btn btn-link text-primary pu-auto text-decoration-none' >Reset Password</button>
            </p>
        </div>
    );
};

export default Login;