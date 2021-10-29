import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../image/google1.png';
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
        <div className='d-flex justify-content-center p-5'>
            <div className='login-container'>
                <h5 className='mb-5'>Login With</h5>
                <button className='icon-content' onClick={handleGoogleSignin}>
                    <img style={{width:'25px'}} src={logo} alt="" />
                    <span className='login-text text-muted'>Continue with Google</span>
                </button>
                <p className='mt-2'><small>Don't have an account? <Link to='/resgister'>Create an account</Link></small></p>
            </div>
        </div>
    );
};

export default Login;