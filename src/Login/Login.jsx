import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import Footer from '../Home/Footer';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn,googleSignIn,user,githubSignIn}=useContext(AuthContext)
    const [error,setError]=useState()
    const [show,setShow]=useState(false)
    const location=useLocation()
    const navigate=useNavigate()
// console.log(user);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{
        signIn(data.email,data.password)
        .then(result=>{
            const user1 = result.user;
                toast.success('Login successful!')
            setTimeout(()=>{
                navigate(location?.state?location.state:'/')
            },1000)
        })
        .catch(error=>{
              // Handle sign-in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      
      // Display error message to the user
      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
        toast.error(errorMessage)
      } else {
        // Handle other errors
        toast.error(errorMessage)
        console.error('Sign-in error:', errorMessage);
      }
        })
        }
        const handleGoogleSignIn=()=>{
            googleSignIn()
            .then(result=>{
                toast.success('Login successful!')
                setTimeout(()=>{
                    navigate(location?.state?location.state:'/')
                },1000)
            })
            .catch()
        }
        const handleGithubSignIn=()=>{
            githubSignIn()
            .then(result=>{
                toast.success('Login successful!')
                setTimeout(()=>{
                    navigate(location?.state?location.state:'/')
                },1000)
            })
            .catch(e=>{
            })
        }
    return (
        <div>
            <Helmet>
            <title>Hospitality Haven | Login</title>
          </Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
<div className="hero-content  flex-col ">
    <div className="text-center">
    <h1 className="text-5xl font-bold">Login now!</h1>
    <p className="py-6 max-w-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" name='email' placeholder="email" className="input input-bordered" 
        {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control relative">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type={show?'text':'password'}  name='password' placeholder="password" className="input input-bordered" 
        {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
        <div onClick={()=>{setShow(!show)}} className='absolute text-2xl right-4 top-[40%]'>
            
            {show?<FaEye />:<FaEyeSlash />}</div>
        </div>
        <div className="form-control mt-6">
        <button className="btn text-xl bg-red-400 text-white uppercase font-bold">login</button>
        </div>
    </form>
    <div className='flex flex-col md:flex-row space-y-4 items-center justify-around my-5'> 
    <h3 className='text-3xl font-bold text-blue-500'>Login With </h3>
    {/* google login */}
    <div onClick={handleGoogleSignIn}  className='flex items-center border p-3 rounded-lg'>
    <img className='h-[40px]' src="/googlelogo_color_272x92dp.png" alt="" />
    </div>
        {/* github login */}

    <div onClick={handleGithubSignIn} className='flex items-center border p-3 rounded-lg' >
   <img className='h-[50px] rounded-xl' src="/freecodecampl-github.png" alt="" />
    </div>

    </div>
    <p className='text-center mb-4'>Do not have an account, Please <Link
    className='font-bold text-blue-800 underline' 
    to={'/register'}>Register</Link></p>
    </div>
<ToastContainer />
</div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Login;