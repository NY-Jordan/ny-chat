import React from 'react';
import DescAuth from '../../Components/Auth/DescAuth';
import LoginForm from '../../Components/Auth/LoginForm';
import './../../assets/css/auth.css';

const Login = () => {
    return (
        <div className='login-blog-chat'>
            <div className="card">
                <div className="row card-container">
                    <div className='col-6 card-container'>
                        <DescAuth />
                    </div>
                    <div className='col-6 card-container' style={{backgroundColor : "#29b1e0"}}>
                        <LoginForm />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;