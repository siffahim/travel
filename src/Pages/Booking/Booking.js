import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Booked from '../Booked/Booked';

const Booking = () => {
    const [service, setService] = useState({});
    const { bookingId } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/services/${bookingId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    return (
        <div>
            <h2>Booking.com {bookingId}</h2>
            <Booked
                service={service}
            >
            </Booked>
        </div>
    );
};

export default Booking;