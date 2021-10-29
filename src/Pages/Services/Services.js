import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const dataLoad = async () => {
            const res = await fetch('http://localhost:5000/services');
            const data = await res.json();

            setServices(data)
        }
        dataLoad()
    },[])
    return (
        <Container>
            <div className='mt-5'>
                <h3>Popular Destinations</h3>
                <p>CHOOSE YOUR PLACE</p>
            </div>
            <div className='service-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;