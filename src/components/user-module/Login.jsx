// import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

  const handleLogin = (e)=>{
    e.preventDefault()
    toast.success("sucessfully logged in ")
  }
  return (
    <div className="w-full flex justify-center items-center h-screen">
    <div className='w-[400px] border-2 border-gray-300 rounded-2xl'>
          <div className="flex gap-6 flex-col card py-5 px-10">
            {/* Logo section */}
            <div className="flex flex-row justify-center gap-2">
              <img src="/logo.webp" alt="logo" height={32} width={38} />
              <h2 className="text-primary-100 text-2xl font-semibold">Pet care</h2>
            </div>
    
            {/* Login Form */}
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input-border"
                  required
                />
              </div>
    
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className='input-border'
                  required
                />
              </div>
             <ToastContainer/>
              <button
                type="submit"
                className="bg-black text-white py-2 hover:bg-primary-200 transition duration-200 rounded-4xl"
                onClick={(e)=>handleLogin(e)}
              >
                Login
              </button>
            </form>
          </div>
          <p className='text-center py-3 font-medium'>No account yet? <Link to={'/sign-up'} >Sign up</Link> </p>
    </div>
    </div>
  );
};

export default Login;
