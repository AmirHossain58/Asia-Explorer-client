import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye,FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import Footer from '../Home/Footer';

const Register = () => {
    const navigate=useNavigate()
    const location=useLocation()

    const [show,setShow]=useState(false)
    const [name ,setName]=useState('')
    const [photo ,setPhoto]=useState('')
    const {createUser,setUser,user, googleSignIn,githubSignIn}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) =>{
        //   console.log(data,data.photo,data.name)
        
        const verifyPassword = (password) => {
            const uppercaseRegex = /[A-Z]/;
            const lowercaseRegex = /[a-z]/;
            const lengthRegex = /^.{6,}$/;
          
            const hasUppercase = uppercaseRegex.test(password);
            const hasLowercase = lowercaseRegex.test(password);
            const hasMinLength = lengthRegex.test(password);
          
            return hasUppercase && hasLowercase && hasMinLength;
          };
          const isValidPassword = verifyPassword(data.password);

            if (isValidPassword) {
                toast.success('Successfully Register')
            // console.log("Password is valid.");
            } else {
            return toast.error("Password Must have an Uppercase,a Lowercase ,Length at least 6 character.");
            }
        setPhoto(data.photo)
        setName(data.name)
        createUser(data.email,data.password)
        .then((r)=>{
            navigate(location?.state?location.state:'/')
        })
        .catch()
    }
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            navigate(location?.state?location.state:'/')
        })
        .catch()
    }
    const handleGithubSignIn=()=>{
        githubSignIn()
        .then(result=>{
            navigate(location?.state?location.state:'/')
        })
        .catch(e=>{
            // console.log(e);
        })
    }
    return (
        <div>
            <Helmet>
            <title>Hospitality Haven | Register</title>
          </Helmet>
            <Navbar 
            name={name}
            photo={photo}
            ></Navbar>

<div className="hero min-h-screen bg-base-200">
<div className="hero-content lg:w-3/4 flex-col ">
    <div className="text-center">
    <h1 className="text-5xl font-bold">Register now!</h1>
    <p className="py-6 max-w-2xl">Nice to meet you! Enter your details to register.</p>
    </div>
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
        </label>
        <input type="text" name='name' placeholder="name" className="input input-bordered" 
        {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Photo</span>
        </label>
        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" 
        {...register("photo", { required: true })}
        />
        {errors.photo && <span>This field is required</span>}
        </div>
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
        <input type={show?'text':'password'} name='password' placeholder="password" className="input input-bordered" 
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
        <button className="btn bg-red-400 uppercase font-bold">Register</button>
        </div>
        </form>
        <div className='flex flex-col md:flex-row items-center space-y-4 justify-around my-5'> 
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

    <p className='text-center mb-4 text-xl'>Do have an account, Please <Link
    className='font-bold text-blue-800 underline' 
    to={'/login'}>Login</Link></p>
    </div>
    <ToastContainer />
</div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Register;