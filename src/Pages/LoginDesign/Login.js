import React from 'react';
import './Login.css'
import {  Link, useNavigate } from "react-router-dom";
const Login = ({setUser}) => {
    const navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user ={
            email,
            password
        }
        fetch(`http://localhost:5000/login` ,{
            method:"POST",
            headers:{
                "content-type" :  "application/json"
            },
            body : JSON.stringify(user)
        }).then(res =>{
            if(res.status===200){
                navigate("/profile")
        return res.json()
            }else{
                alert("Login not success")
            }
        }).then(data=> setUser(data.emailData)) 
    }
    return (
        <div className='login-head '>
            <div className='container login-flex d-flex justify-content-center align-items-center'>
                <div className='login-main'>
                    <h3 className='my-4 login-title text-center'>Please Login</h3>
                    <div>
                        <form  onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name='email'  id="exampleFormControlInput1" />
                        </div>
                        <div class="mb-4">
                            <label for="exampleFormControlInput1" class="form-label">Password </label>
                            <input type="password" class="form-control"  name='password' id="exampleFormControlInput1" />
                        </div>          
                        <div>
                        
                        </div>             
                        <div class="mb-3 mt-4 text-center">
                            
                            <input type="submit" value="Login " class="form-control w-50 btn btn-primary" id="exampleFormControlInput1" />
                        </div>                       
                       
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;