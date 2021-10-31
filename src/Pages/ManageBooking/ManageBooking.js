import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageCard from '../ManageCard/ManageCard';
import './ManageBooking.css';

const ManageBooking = () => {
    const [users, setUsers] = useState([]);
    const [number, setNumber] = useState(0)
    useEffect(() => {
        const user = async () => {
           const res = await fetch('http://localhost:5000/booking');
           const data = await res.json();
            
           setUsers(data)
        }
        user()
    }, [number])
    
    return (
        <Container>
            <div className="table-responsive my-4 p-3 shadow">
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='text-muted fw-normal'>NAME</th>
                            <th className='text-muted fw-normal'>EMAIL</th>
                            <th className='text-muted fw-normal'>FROM</th>
                            <th className='text-muted fw-normal'>TO</th>
                            <th className='text-muted fw-normal'>STATUS</th>
                            <th className='text-muted fw-normal'>Check</th>
                            <th className='text-muted fw-normal'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <ManageCard
                                key={user._id}
                                user={user}
                                setNumber={setNumber}
                            ></ManageCard>
                            )}
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default ManageBooking;