import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ManageCard from '../ManageCard/ManageCard';

const ManageBooking = () => {
    const [users, setUsers] = useState([]);
    const[number, setNumber] = useState(0)
    useEffect(() => {
        const user = async () => {
           const res = await fetch('http://localhost:5000/booking');
           const data = await res.json();
            
           setUsers(data)
        }
        user()
    }, [number])
    
    return (
        <div className='m-5 p-2 shadow'>
            <Container>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th className='text-muted'>NAME</th>
                            <th className='text-muted'>EMAIL</th>
                            <th className='text-muted'>FROM</th>
                            <th className='text-muted'>TO</th>
                            <th className='text-muted'>STATUS</th>
                            <th className='text-muted'>Check</th>
                            <th className='text-muted'>ACTION</th>
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
                </Table>
            </Container>
        </div>
    );
};

export default ManageBooking;