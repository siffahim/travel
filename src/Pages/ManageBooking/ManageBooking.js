import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageBooking = () => {
    const [users, setUsers] = useState([]);
    const [pan,setPan] = useState(false)
    useEffect(() => {
        const user = async () => {
           const res = await fetch('http://localhost:5000/booking');
           const data = await res.json();
            
           setUsers(data)
        }
        user()
    }, [])
    
    //delete
    const handleDelete = id => {
        const url = `http://localhost:5000/booking/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Succesfully Deleted');
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining)
                }
            })
    }
    //delete btn style 
    const btnDelete = {
        border: 'none',
        backgroundColor:"#fe8403",
        color: "#fff",
        fontSize: "17px",
        borderRadius: "3px"
    }

    //check
    const handleChange = e => {
        const task = e.target.checked;
        setPan(task)
    }
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
                            users.map(user => <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.from}</td>
                                <td>{user.to}</td>
                                <td>{pan ? 'Approved': user.status}</td>
                                <td><input className="form-check-input" type="checkbox" onChange={handleChange} /></td>
                                <td><button style={btnDelete} onClick={() => handleDelete(user._id)}><i className="fas fa-trash-alt"></i></button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageBooking;