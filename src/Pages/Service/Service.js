import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, url, price } = props.service;
    const history = useHistory()

    const handleBooking = id => {
        history.push(`/booking/${id}`)
    }
    return (
        <Col>
            <Card className='card-container'>
                <Card className='photo'>
                    <Card.Img src={url} alt="" />
                </Card>
                <Card.Body className='photo-detail'>
                    <div className='line'>
                        <p className='fs-4 fw-bold text'>{name}</p>
                        <p className='fs-5 fw-semi text'>Starting from ${price}</p>
                    </div>
                    <button onClick={()=> handleBooking(_id)} className='btn-regular btn-custom'>Book Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
