import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../image/logo-icon.png';
import './AddNew.css';

const AddNew = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        fetch('https://fast-falls-53703.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added')
                    reset()
                }
        })
    };
    return (
        <>
            <p className='text-center text-muted' data-aos="fade-up">
                <img width='100px' src={logo} alt="" />
                <p>We make dreams come true!</p>
            </p>
            <div data-aos="fade-up" className='form-container d-flex align-items-center justify-content-center'>
                <div className='text-center'>
                    <h2 className='fw-bold text-muted'>ADD <span className='text-custom fw-bold'>TRAVEL</span> DESTINATION</h2>
                    <p className='text-muted'>Wherever you go,make yourself at home</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='add-form'>
                        <input {...register("name", { required: true })} placeholder="Name" />
                        {errors.name && <span className='text-danger'>This field is required</span>}

                        <input type='number' {...register("price", { required: true })} placeholder="Price" />
                        {errors.price && <span className='text-danger'>This field is required</span>}

                        <input type='number' {...register("time", { required: true })} placeholder="Day" />
                        {errors.time && <span className='text-danger'>This field is required</span>}

                        <input type='number' {...register("star", { required: true })} placeholder="Review out of 5" />
                        {errors.star && <span className='text-danger'>This field is required</span>}

                        <input defaultValue='https://www.theblondeabroad.com/wp-content/uploads/2018/06/in-California-3.jpg' {...register("url", { required: true })} placeholder="img-url" />
                        {errors.url && <span className='text-danger'>This field is required</span>}

                        <input type="submit" className='btn-regular' value='Add' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddNew;
