import React from 'react';
import DescAuth from '../../Components/Auth/DescAuth';
import RegisterForm from '../../Components/Auth/RegisterForm';

const Register = () => {
    return (
        <div className='login-blog-chat'>
            <div className="card">
                <div className="row card-container">
                    <div className='col-6 card-container'>
                        <DescAuth />
                    </div>
                    <div className='col-6 card-container' style={{backgroundColor : "#29b1e0"}}>
                        <RegisterForm />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Register;