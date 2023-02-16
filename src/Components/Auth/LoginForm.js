import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from 'react-router-dom';
import { UserLogin, UserLoginAction } from '../../redux/user/UserService';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: "onTouched",
    });
    const dispatch = useDispatch();

    const submitLogin = async (data) => {
          const user  = {
            email: data.required_email,
            password: data.required_password,
          }
          UserLoginAction(user, dispatch); 
      };
      const loginState = useSelector(state => state.login);
      console.log(loginState);
    return (
        <div style={{ color: "white" }}>
            <div style={{  marginTop : "100px" }}>
                { loginState.error && 
                <div className="alert alert-danger mt-2" > 
                    {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>  */}
                    <p>{loginState.error}</p> 
                </div> }
                <div className="row">
                    <div className="col-4  ml-100"><h3  style={{ color: "white" }}>Login</h3></div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                </div>
                <form  onSubmit={handleSubmit(submitLogin)} method="post" style={{ textAlign : "center" }} className="ml-100">
                    <div className="form-group">
                        <input type="email" className='form-control mt-2 w-20' placeholder='Enter Your Mail' {...register("required_email", {
                                                                                                                    required: true})} />
                    </div>
                    {errors.required_email && (
                    <small style={{ color: "red" }}>Email field is required</small>
                    )}
                    <div className="form-group mt-5 w-20">
                        <input type="password" className='form-control' placeholder='Your password' {...register("required_password", {
                                                                                                                    required: true})} />
                        {errors.required_password && (
                            <small style={{ color: "red" }}>Password field is required</small>
                        )}
                    </div>
                    <div className="form-group">
                        <button type='submit'>Log in</button>
                    </div>
                    <div className="form-group">
                        <div className="row" style={{ marginTop : "100px" }}>
                            <div className="col-2">
                                
                            </div>
                            <div className="col-8"><p>don't an Account ? <Link to="/register">Register</Link></p></div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    );
};

export default LoginForm;