import React from 'react';
import { Container } from 'react-bootstrap';
import './Rank.css';

const Rank = () => {
    return (
        <Container>
            <h3 className='text-muted text-center my-5' data-aos="fade-up">OUR <span className='text-custom fw-bold' data-aos="fade-up">TRAVELING</span> SPECIAL GUIDE</h3>
            <div className='rank-container'>
                <div className='p-2 card' data-aos="fade-up">
                    <div className='rank-icon'>
                        <i className="far fa-gem rank"></i>
                    </div>
                    <h5 className='text-muted'>Special Activities</h5>
                    <p className='text-muted'>An author bio box is a great way to offer additional context to your visitors and present a more personal image of…</p>
                </div>
                <div className='p-2 card' data-aos="fade-up">
                    <div className='rank-icon'>
                        <i class="fas fa-pen rank"></i>
                    </div>
                    <h5 className='text-muted'>Travel Arragement</h5>
                    <p className='text-muted'>An author bio box is a great way to offer additional context to your visitors and present a more personal image of…</p>
                </div>
                <div className='p-2 card' data-aos="fade-up">
                    <div className='rank-icon'>
                        <i class="far fa-star rank"></i>
                    </div>
                    <h5 className='text-muted'>Your Private Guide</h5>
                    <p className='text-muted'>An author bio box is a great way to offer additional context to your visitors and present a more personal image of…</p>
                </div>
                <div className='p-2 card' data-aos="fade-up">
                    <div className='rank-icon'>
                        <i class="fas fa-map-marker-alt rank"></i>
                    </div>
                    <h5 className='text-muted'>Location Manager</h5>
                    <p className='text-muted'>An author bio box is a great way to offer additional context to your visitors and present a more personal image of…</p>
                </div>
            </div>
        </Container>
    );
};

export default Rank;