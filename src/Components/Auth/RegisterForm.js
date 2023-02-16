import React, { useCallback } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserRegister, UserRegisterAction } from "../../redux/user/UserService";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UserRegisterSelector } from "../../redux/user/reducer/UserSelector";
import {  registerFailed } from "../../redux/user/UserActions";

const RegisterForm = () => {
  // form-hook for submit the form register
  const { register, handleSubmit, formState: { errors }, } = useForm({
    mode: "onTouched",
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //submit the form register
  const submitRegister = async (data) => {
    if (data.required_password === data.required_confirm_password) {
      const user  = {
        email: data.required_email,
        username: data.required_username,
        password: data.required_password,
      }
      UserRegisterAction(user, dispatch);
    } else {
      //if password confirm is not correct
      dispatch(registerFailed('Confirm password failed'))
    }  
  };
  const registerState = useSelector(state => state.register);
  console.log(registerState);
  const token  = localStorage.getItem('token');
  if (token) {
    console.log(token);
    navigate('/chat');
  }
  return (
    <div style={{ color: "white" }}>
      
      <div style={{ marginTop: "70px" }}>
        { registerState.error && 
          <div className="alert alert-danger mt-2" > 
            {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>  */}
            <p>{registerState.error}</p> 
          </div> }
        <div className="row">
          <div className="col-4  ml-100">
            <h3 style={{ color: "white" }}>Register</h3>
          </div>
          <div className="col-4"></div>
          <div className="col-4"></div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(submitRegister)}
          method="post"
          style={{ textAlign: "center" }}
          className="ml-100"
        >
          <div className="form-group">
            <input
              type="email"
              className="form-control mt-4 w-20"
              placeholder="Enter Your Mail"
              {...register("required_email", {
                required: true,
              })}
            />
            {errors.required_email && (
              <small style={{ color: "red" }}>this field is required</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-4 w-20"
              placeholder="Enter Your Username"
              {...register("required_username", {
                required: true,
              })}
            />
            {errors.required_username && (
              <small style={{ color: "red" }}>this field is required</small>
            )}
          </div>
          <div className="form-group mt-4 w-20">
            <input
              type="password"
              className="form-control"
              placeholder="Your password"
              {...register("required_password", {
                required: true,
              })}
            />
            {errors.required_password && (
              <small style={{ color: "red" }}>this field is required</small>
            )}
          </div>
          <div className="form-group mt-4 w-20">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              {...register("required_confirm_password", {
                required: true,
              })}
            />
            {errors.required_confirm_password && (
              <small style={{ color: "red" }}>this field is required</small>
            )}
          </div>
          <div className="form-group">
            <button type="submit">soumettre</button>
          </div>
          <div className="form-group">
            <div className="row" style={{ marginTop: "60px" }}>
              <div className="col-2"></div>
              <div className="col-8">
                <p>
                  Already an Account ? <Link to="/">Login</Link>{" "}
                </p>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
