import React from 'react';
import banner from '../../image/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-6'>
                    <div className='ps-3'>
                        <h1>Welcomt to travel</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi non incidunt maiores maxime sed delectus vel eius perspiciatis! Illo, commodi.</p>
                        <input type="date" name="" id="" />
                    </div>
                </div>
                <div className='col-6'>
                    <img src={banner} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;