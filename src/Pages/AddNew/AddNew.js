import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddNew.css';

const AddNew = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
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
        <div className='adding-container'>
             <Container>
                <div className='row'>
                    <h3 className=' text-white my-4'>ADD SPECIAL OFFER</h3>
                    <div className='d-flex col-6 justify-content-start form'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} placeholder="Name" />
                            {errors.name && <span className='text-danger'>This field is required</span>}

                            <input type='number' {...register("price", { required: true })} placeholder="Price" />
                            {errors.price && <span className='text-danger'>This field is required</span>}

                            <input type='number' {...register("time", { required: true })} placeholder="Day" />
                            {errors.time && <span className='text-danger'>This field is required</span>}

                            <input {...register("url", { required: true })} placeholder="img-url" />
                            {errors.url && <span className='text-danger'>This field is required</span>}

                            <input type="submit" className='btn-regular' value='Add' />
                        </form>
                    </div>
                </div>
            </Container>
            </div>
    );
};

export default AddNew;