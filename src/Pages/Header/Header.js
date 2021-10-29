import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    console.log(user)
    return (
        <Navbar  className='item'expand="lg" className='px-3 header'>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-center'>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className='item'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/features" className='item'>Features</Nav.Link>
                    {
                        user.email && <Nav.Link href="#features" className='item'>My Order</Nav.Link>
                    }
                    {
                        user.email && <Nav.Link href="#features" className='item'>Manage order</Nav.Link>
                    }
                    {
                        user.displayName && <div>
                            <img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }} src={user.photoURL} alt={user.displayName} />
                        </div>
                    }
                    {
                        user.email ? <button onClick={logOut} className='btn-regular'><i className="fas fa-sign-out-alt"></i> Logout</button> : <Nav.Link as={Link} to="/login" className='item'>Login</Nav.Link>
                    }
                    </Nav>
                </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;