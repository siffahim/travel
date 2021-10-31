import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import AddToCart from '../AddToCart/AddToCart';
import './MyBook.css';

const MyBook = () => {
    const [users, setUsers] = useState([]);
    const { user } = useAuth();
    const [number, setNumber] = useState(0)

    const  email= {
        email: user.email
    }
    useEffect(() => {
        fetch('https://fast-falls-53703.herokuapp.com/booking/email', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(email)
        }).then(res => res.json())
        .then(data => setUsers(data))
    }, [number])
    console.log(users)
    return (
        <Container>
            <div className="mybook-container">
                {
                    users.map(user => <AddToCart
                        key={user}
                        user={user}
                        setNumber={setNumber}
                    ></AddToCart>)
                }
            </div>
        </Container>
    );
};

export default MyBook;