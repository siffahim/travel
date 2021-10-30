import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const dataLoad = async () => {
            const res = await fetch('http://localhost:5000/services');
            const data = await res.json();
            setServices(data)
            setLoad(false)
        }
        dataLoad()
    },[])
    return (
        <Container>
            <div className='mt-5'>
                <h3 className='text-muted'>POPULAR <span className='text-custom fw-bold'>TRAVELER'S</span> DESTINATION</h3>
                <p className='text-muted'>CHOOSE YOUR PLACE</p>
            </div>
            <div className='text-center'>
                {
                 load && <Spinner animation="grow" variant="black" />
                }
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