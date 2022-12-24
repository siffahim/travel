
import React from 'react';
import gallery from '../../image/footer-img.png';
import logo from '../../image/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                <ul>
                    <img width='200px' className='mb-2' src={logo} alt="" /><br />
                    <img width='300px' className='img-foot' src={gallery} alt="" /><br />
                    <button className='btn-regular mt-3'>BOOK NOW <i className="fas fa-angle-right b"></i></button>
                </ul>
                <ul>
                    <p className='fs-5 fw-bold'>Services</p>
                    <li><i className="fas fa-angle-double-right"></i> About Us</li>
                    <li><i className="fas fa-angle-double-right"></i> How it work</li>
                    <li><i className="fas fa-angle-double-right"></i> Our Services</li>
                    <li><i className="fas fa-angle-double-right"></i> Events</li>
                    <li><i className="fas fa-angle-double-right"></i> Our Packages</li>
                    <li><i className="fas fa-angle-double-right"></i> FQA</li>
                    <li><i className="fas fa-angle-double-right"></i> Schedule</li>
                </ul>
                <ul>
                    <p className='fs-5 fw-bold'>Contact Us</p>
                    <li><i className="fas fa-map-marker-alt"></i> Mirpur-12,Doctor Goli,Road-N2.Dhaka,Bangladesh</li>
                    <li><i className="fas fa-phone-alt"></i> +00965321402</li>
                    <li><i className="fas fa-envelope"></i>worldtourism2021@gmail.com</li>
                    <li><i className="fas fa-clock"></i> Weack Days:05:00-22:00
                        Satardat:04:00-09:00
                        Wednessday:03:00-10:00
                    </li>
                </ul>
            </div>
            <div className='footer-copyright'>
                <p>World Tourism © 2021</p>
                <ul className='footer-icon'>
                    <li className='me-2 icon'><i className="fab fa-facebook-square"></i></li>
                    <li className='me-2 icon'><i className="fab fa-twitter-square"></i></li>
                    <li className='me-2 icon'><i className="fab fa-linkedin"></i></li>
                    <li className='me-2 icon'><i className="fab fa-instagram-square"></i></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;