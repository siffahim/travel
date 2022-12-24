import React from 'react';
import './AddToCart.css';

const AddToCart = ({ user, setNumber }) => {
    const { name, email, url, to, from, status, country, _id } = user;
    //delete btn style 
    const btnDelete = {
        border: 'none',
        backgroundColor: "#fe8403",
        color: "#fff",
        fontSize: "17px",
        borderRadius: "3px"
    }
    const handleDelete = id => {
        const proess = window.confirm('Are you want to Delete?')
        if (proess) {
            const url = `https://world-tourism-server.onrender.com/booking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Succesfully Deleted');
                        // const remaining = users.filter(user => user._id !== id);
                        // setUsers(remaining)
                        setNumber(prev => prev + 1)
                    }
                })
        }
    }
    return (
        <div className='row g-0 custom-card' data-aos="fade-up">
            <div className='col-md-4 col-12'>
                <img src={url} alt="" />
            </div>
            <div className='col-md-7 col-12'>
                <div className='detail-info'>
                    <p className='fs-6 mt-2 fw-bold text-muted'>{country}</p>
                    <p className='text-size text-muted'><i className="fas fa-address-card text-custom"></i> {status ? 'Approved' : 'Panding...'}</p>
                    <div className='d-md-flex'>
                        <p className='me-4 text-muted text-size'><i className="fas fa-home text-custom text-size"></i> {from}</p>
                        <p className='text-muted text-size'><i className="fas fa-plane-departure text-custom text-size"></i> {to}</p>
                    </div>
                    <p className='me-4 text-muted text-size'><i className="fas fa-user text-custom text-size"></i> {name}</p>
                    <p className='text-muted text-size'><i className="fas fa-envelope text-custom text-size"></i> {email}</p>
                </div>
            </div>
            <div className='col-1'>
                <button style={btnDelete} onClick={() => handleDelete(_id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    );
};

export default AddToCart;