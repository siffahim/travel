import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import useAuth from '../../Hooks/useAuth';
import './Booked.css';

const Booked = (props) => {
    const { url,name,time,star } = props.service;
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Booking')
                    reset()
            }
        })
    };
    return (
        <Container>
            <div className='row mb-5'>
                <div className='col-6'>
                    <div className='card-detail'>
                    <div className='row'>
                            <div className='col-6'>
                                <img className='img-fluid' src={url} alt="" />
                            </div>
                            <div className='col-6'>
                                <p className='fs-5 fw-bold text-muted'>{name}</p>
                                <Rating
                                    initialRating={star}
                                    emptySymbol="far fa-star text-custom"
                                    fullSymbol="fas fa-star text-custom"
                                    readonly
                                />
                                <p className='text-muted'><i class="far fa-clock text-custom"></i> {time}D</p>
                                <p className='text-muted'>
                                    The travel and tourism industry is gaining momentum, and it has never been more lucrative. In addition to that, there are various business opportunities arising.
                                </p>
                                <button className='btn-regular'>Learn More</button>
                            </div>
                        </div>
                   </div>
                </div>
                <div className='col-6 card'>
                    <h2 className='fw-bold text-custom'>BOOK & TRAVEL</h2>
                    <p className='text-muted'>Wherever you go,make yourself at home</p>

                    {/*-----------------form-----------------*/}

                    <div className='form-container mx-auto'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" defaultValue={user.displayName} {...register("name")} placeholder="Name" />
                            <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" />
                            {errors.email && <span>This field is required</span>}
                           
                            <input type="text" {...register("from", { required: true })} placeholder="From" />
                            {errors.from && <span className='text-danger'>This field is required</span>}
                            <input type="text" {...register("to", { required: true })} placeholder="To" />
                            {errors.to && <span className='text-danger'>This field is required</span>}

                            <input type="text" {...register("country",{required: true})} placeholder="Present Country" />
                            {errors.country && <span className='text-danger'>This field is required</span>}

                            <input type="number" {...register("phone",{required:true})} placeholder="Phone" />
                            {errors.phone && <span className='text-danger'>This field is required</span>}

                            <input type="submit" value="Booking" className='btn-regular' />
                        </form>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Booked;