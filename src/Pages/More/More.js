import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../image/1.jpg';
import img2 from '../../image/2.jpg';
import img3 from '../../image/3.jpg';
import img4 from '../../image/4.jpg';
import img5 from '../../image/5.jpg';
import './More.css';

const More = () => {
    return (
        <Container>
            <p className='fs-2 text-center mt-5 text-muted'>BEST <span className='text-custom fw-bold'>TRAVELER'S</span> SHARED PHOTOS</p>
            <p className='text-center text-muted fw-bold fs-5 mb-4'>ALL ON ONE TOUCH</p>
            <div className='album'>
                <div className='row'>
                    <div className='col-6'>
                        <img className='img-fluid' src={img1} alt="" />
                        <div className='text-album'>
                            <p className='fs-5 fw-bold text'>United State</p>
                            <p className='fs-6 fw-semi text'>81 Citis</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <img className='img-fluid' src={img2} alt="" />
                                <div className='text-album'>
                                    <p className='fs-5 fw-normal text'>United State</p>
                                    <p className='fs-6 fw-normal text'>81 Citis</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img className='img-fluid' src={img3} alt="" />
                                <div className='text-album'>
                                    <p className='fs-5 fw-normal text'>United Kingdom</p>
                                    <p className='fs-6 fw-normal text'>81 Citis</p>
                                </div>
                            </div>
                            <div className='col-6 mt-3'>
                                <img className='img-fluid' src={img4} alt="" />
                                <div className='text-album'>
                                    <p className='fs-5 fw-normal text'>Germany</p>
                                    <p className='fs-6 fw-normal text'>81 Citis</p>
                                </div>
                            </div>
                            <div className='col-6 mt-3'>
                                <img className='img-fluid' src={img5} alt="" />
                                <div className='text-album'>
                                    <p className='fs-5 fw-normal text'>Japan</p>
                                    <p className='fs-6 fw-normal text'>81 Citis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default More;