import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Photo Galleria</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Services</Nav.Link>
                        </Nav>
                        <Nav>
                           {user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button> 
                           : 
                           <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
                           <Nav.Link as={Link} to='/checkout'>
                                Checkout
                            </Nav.Link>

                            <Nav.Link as={Link} to='/about'>
                                About Me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;