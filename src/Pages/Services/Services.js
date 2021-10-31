import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const dataLoad = async () => {
            const res = await fetch('https://fast-falls-53703.herokuapp.com/services');
            const data = await res.json();
            setServices(data)
            setLoad(false)
        }
        dataLoad()
    },[])
    return (
        <Container>
            <div className='mt-5'>
                <h3 className='text-muted text-center'>POPULAR <span className='text-custom fw-bold'>TRAVELER'S</span> DESTINATION</h3>
                <p className='text-muted text-center'>CHOOSE YOUR PLACE</p>
            </div>
            <div className='text-center'>
                {
                 load && <Spinner animation="grow" variant="black" />
                }
            </div>
            <Row xs={1} md={3} className="g-2 p-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;