import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import logo from '../../image/logo-icon.png';
import Booked from '../Booked/Booked';

const Booking = () => {
    const [service, setService] = useState({});
    const { bookingId } = useParams();
    useEffect(() => {
        const url = `https://world-tourism-server.onrender.com/services/${bookingId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    return (
        <div>
            <p className='text-center text-muted mb-4'>
                <img width='100px' src={logo} alt="" />
                <p>We make dreams come true!</p>
            </p>
            <Booked
                service={service}
            >
            </Booked>
        </div>
    );
};

export default Booking;