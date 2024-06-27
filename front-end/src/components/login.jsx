import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import loginimg from '../assests/loginimg.jpg'
import { useNavigate } from 'react-router-dom';

export  function SignIn(){
        const {
          register,
          handleSubmit,
        //   watch,
        setError,
        formState: {errors}
        } = useForm()

        const navigate = useNavigate();

        const  onSubmit = async  (data) => {
            console.log(data);
            let r = await fetch("http://localhost:4000/login", {method: "POST",  headers: {
                "Content-Type": "application/json", 
              }, body: JSON.stringify(data)})
            if(r.ok){
                const url = await r.json();
                navigate(url.redirectUrl);
            }
            else{
                const responseData = await r.json();
                console.log(responseData);
                setError("username", { type: "manual", message: "Incorrect credentials" });
                setError("Password", { type: "manual", message: "Incorrect credentials" });
            }
              
        }
        function userReg(e){
            e.preventDefault();
        }
    return(
        <div className="container w-[100vw] h-[100vh] m-auto flex">
            <div className="login-side w-[100%] m-auto  flex-col h-[100%]">
                <div className="logo p-5 text-2xl mt-12">
                    <Link className="text-sm ml-[4rem]" to='/'>Back</Link>
                    <h1 className="font-Playwrite ml-[4rem] w-fit">ECom Website</h1>
                </div>
                    <div className="headings  p-5 mt-6">
                        <h1 className="w-fit ml-[4rem] text-2xl font-Playwrite">Welcome Back!</h1>
                        <br/>
                        <p className="w-fit ml-[4rem]">Please enter log in details below</p>
                    </div>
                    <div className="login-form w-[100%] p-5 flex-col ">
                        <form onSubmit={handleSubmit(onSubmit)} className="ml-[4rem]" method='POST' action=''>
                            <TextField {...register("Username", { required: true })} sx={{width: "25rem", borderRadius: "25px", border: 0, outline: 0}} label="Username" className="removeoutline" type='text'/>
                            <br/>
                            {errors.username && <p className="text-red-500">Invalid Credentials</p>}
                            <br/>
                            <TextField {...register("Password", { required: true })} sx={{width: "25rem"}}   label="Password" type="password" autoComplete="current-password"/>
                            <br/>
                            {errors.username && <p className="text-red-600">Invalid Credentials</p>}
                            <br/>
                            <input onSubmit={onSubmit} className="w-[25rem] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]" type="submit" value="Submit"/>
                           
                        </form>
                        <div className="forgot text-right ml-[4rem] w-[25rem]"><p>Forgot Password?</p></div>
                        <div onClick={userReg} className="register w-[25rem] ml-[4rem] flex-col justify-center items-center mt-4">
                            <p className="text-center">Or Sign-Up</p>
                            <Link to='/register'   className="w-[25rem] bg-[#fff] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                            Register
                            </Link>
                        </div>
                    </div>
            </div>
            <div className="login-img flex items-center justify-center w-[100%]  h-[100%]">
                        <img className="rounded-3xl" src={loginimg} alt='login'/>
            </div>
        </div>
    )
}