import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, url, price,time,star } = props.service;
    return (
        <div>
            <div className='card-container'>
                <div className='photo'>
                    <img src={url} alt="" />
                </div>
                <div className='photo-detail'>
                    <p className='fs-5'>{name}</p>
                    <Link to={`/booking/${_id}`}>
                        <button className='btn-regular'>Book Now</button>
                    </Link>
                </div>
                <div className='price-content'>
                    <h5>${price}</h5>
                </div>
                <div className='rating-content'>
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                    />
                    <p><i class="far fa-clock"></i> {time}D</p>
                </div>
            </div>
        </div>
    );
};

export default Service;