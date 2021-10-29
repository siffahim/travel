import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    console.log(user)
    return (
 
        <Navbar bg="light" variant="light" expand="lg" className='px-3'>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-center'>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/features">Features</Nav.Link>
                    {
                        user.email && <Nav.Link href="#features">My Order</Nav.Link>
                    }
                    {
                        user.email && <Nav.Link href="#features">Manage order</Nav.Link>
                    }
                    {
                        user.displayName && <div>
                            <img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }} src={user.photoURL} alt={user.displayName} />
                        </div>
                    }
                    {
                        user.email ? <button onClick={logOut}><i class="fas fa-sign-out-alt"></i> Logout</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    </Nav>
                </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;