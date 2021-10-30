import React from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, url, price } = props.service;
    const history = useHistory()

    const handleBooking = id => {
        history.push(`/booking/${id}`)
    }
    return (
        <div>
            <div className='card-container'>
                <div className='photo'>
                    <img src={url} alt="" />
                </div>
                <div className='photo-detail'>
                    <div className='line'>
                        <p className='fs-4 fw-bold text'>{name}</p>
                        <p className='fs-5 fw-semi text'>Starting from ${price}</p>
                    </div>
                    <button onClick={()=> handleBooking(_id)} className='btn-regular btn-custom'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;