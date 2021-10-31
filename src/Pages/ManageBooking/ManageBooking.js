import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageCard from '../ManageCard/ManageCard';
import './ManageBooking.css';

const ManageBooking = () => {
    const [users, setUsers] = useState([]);
    const [number, setNumber] = useState(0)
    useEffect(() => {
        const user = async () => {
            const res = await fetch('https://fast-falls-53703.herokuapp.com/booking');
           const data = await res.json();
            
           setUsers(data)
        }
        user()
    }, [number])
    
    return (
        <Container>
            <div className="table-responsive my-4 p-3 shadow rounded">
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='text-muted fw-normal'>Name</th>
                            <th className='text-muted fw-normal'>Email</th>
                            <th className='text-muted fw-normal'>From</th>
                            <th className='text-muted fw-normal'>To</th>
                            <th className='text-muted fw-normal'>Status</th>
                            <th className='text-muted fw-normal'>Action</th>
                            <th className='text-muted fw-normal'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <ManageCard
                                key={user._id}
                                user={user}
                                setNumber={setNumber}
                            ></ManageCard>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default ManageBooking;