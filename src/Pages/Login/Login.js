import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../image/google1.png';
import logo2 from '../../image/logo-icon.png';
import './Login.css';

const Login = () => {
    const { signInGoogle, user, setUser,setIsLoad } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redireact_uri = location.state?.from || 'home';


    //googlesignin
    const handleGoogleSignin = () => {
        setIsLoad(true)
        signInGoogle()
        .then(result => {
                setUser(result.user);
                history.push(redireact_uri)
        }).finally(() => {
            setIsLoad(false)
        })
    }
    return (
        <>
            <div className='d-flex justify-content-center mb-5' data-aos="fade-up">
            <div className='row'>
                    <div className='col-12 col-md-12'>
                        <p className='text-center text-muted'>
                            <img width='100px' src={logo2} alt="" />
                            <p>We make dreams come true!</p>
                        </p>
                        <div className='login-container'>
                        <h5 className='mb-5'>Login With</h5>
                        <button className='icon-content' onClick={handleGoogleSignin}>
                            <img style={{ width: '25px' }} src={logo} alt="" />
                            <span className='login-text text-muted ms-4'>Continue with Google</span>
                        </button>
                        <p className='mt-2'><small>Don't have an account? <Link to='/resgister'>Create an account</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;