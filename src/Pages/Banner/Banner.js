import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="heder-banner-background">
                <Container>
                    <div className='row' data-aos="fade-up">
                        <div className='col-12'>
                                <div className='pt-5'>
                                    <h1 className='fw-bold mt-4 text-white'><span className='text-custom'>TRAVEL</span> FOR THOSE <br /> WHO WANT IT ALL</h1>
                                    <p className="pb-4 text-white">
                                        I was thinking of doing this but im worried about getting lost being alone,<br/> is there markings and are they ok i know there are some, or can i use compass not to get lost.
                                    </p>
                                    <button className='btn-regular me-2'>GET IN TOUCH</button>
                                    <button className='btn-regular'>VIEW MORE</button>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5 col-12 bg-white p-2">
                                <div className="input d-flex justify-content-center align-items-center">
                                    <input type="text" placeholder="Where to" />
                                    <select type="text">
                                        <option value="january">When</option>
                                        <option value="january">january</option>
                                        <option value="january">january</option>
                                        <option value="january">january</option>
                                        <option value="january">january</option>
                                        <option value="january">january</option>
                                    </select>
                                    <select type="text">
                                        <option value="january">Travel Type</option>
                                        <option value="january">Historical</option>
                                        <option value="january">Deef Jungle</option>
                                        <option value="january">january</option>
                                        <option value="january">january</option>
                                        <option value="january">january</option>
                                    </select>
                                    <button className="btn-regular">Find Now</button>
                                </div>
                            </div>
                        </div>
                </Container>
            </div>
        </>
    );
};

export default Banner;