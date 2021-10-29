import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Booked.css';

const Booked = (props) => {
    const { url } = props.service;
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    };
    return (
        <Container>
            <div className='row'>
                <div className='col-6'>
                    <img className='img-fluid' src={url} alt="" />
                </div>
                <div className='col-6'>
                    <h2 className='fw-bold text-custom'>BOOK & TRAVEL</h2>
                    <p className='text-muted'>Wherever you go,make yourself at home</p>

                    {/*-----------------form-----------------*/}

                    <div className='form-container'>
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