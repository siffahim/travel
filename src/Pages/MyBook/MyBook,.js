import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyBook = () => {
    const [users, setUsers] = useState([]);
    const { user } = useAuth();
    const email = user.email;
    useEffect(() => {
        const user = async () => {
            const res = await fetch('http://localhost:5000/booking/byEmail', {
                method: 'Post',
                headers: {
                    'headers':'application/json'
                },
                body:JSON.stringify(email)
            });
            const data = await res.json();
            console.log(data)
        }
        user()
    }, [])
    return (
        <div>
            <h2>My Booking</h2>
        </div>
    );
};

export default MyBook;