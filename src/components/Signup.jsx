import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../action/action';
import Navbar from './Navbar';

const initialState = {
  name: "",
  email: "",
  img: "",
  Github: "",
  password: "",
  confirm_password: ""
};

function Signup() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleValidation = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Incorrect your email";
    }
    if (!formData.password) {
      errors.password = "Incorrect your password";
    }
    if (formData.password !== formData.confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const isValid = handleValidation();
    if (isValid) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.find((user) => user.email === formData.email && user.password === formData.password);

      if (userExists) {
        alert('This User already exists');
        setFormData(initialState)
      } else {
        users.push(formData);
        // localStorage.setItem('users', JSON.stringify(users));
        dispatch(addUser(formData));
        alert('Signup Successfully');
        setTimeout(() => {
          navigate('/createprofile');
        }, 1000);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex bg-[#E8E8E8] w-full h-[620px] items-center justify-center">
        <div className="bg-gray-900 w-[380px] sm:w-[400px] md:[420px] lg:[450px] h-[570px] border-[2px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200">
          <div className=" flex items-center py-4 px-8 font-semibold text-gray-500 flex-col">
            <h1 className="text-white text-2xl pb-4">Sign up</h1>
            <div className="h-[65px] w-full">
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Name"
                type="text"
                required
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="h-[65px] w-full">
              <input
                onChange={handleChange}
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Email"
                type="email"
                required
                name="email"
                value={formData.email}
              />
              {error.email && <span className='text-red-500 text-[13px]'>{error.email}</span>}
            </div>
            <div className="h-[65px] pt-2 w-full">
              <input
                onChange={handleChange}
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Image URL (Optional)"
                name="img"
                type="text"
                value={formData.img}
              />
            </div>
            <div className="h-[65px] w-full mt-2">
              <input
                onChange={handleChange}
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Github Username (optional)"
                type="text"
                name="Github"
                value={formData.Github}
              />
            </div>
            <div className="h-[65px] w-full">
              <input
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
              {error.password && <span className='text-red-500 text-[13px]'>{error.password}</span>}
            </div>
            <div className="pt-2 h-[65px] w-full">
              <input
                onChange={handleChange}
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Confirm Password"
                type="password"
                required
                name="confirm_password"
                value={formData.confirm_password}
              />
              {error.confirm_password && <span className='text-red-500 text-[13px]'>{error.confirm_password}</span>}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full p-2 bg-gray-50 rounded-full mt-4 font-bold text-gray-900 border-[2px] border-gray-700 hover:border-blue-700 transition-all duration-200"
              type="button"
            >
              Register
            </button>
            <p className='mt-2'>
              Don't have an account?
              <Link to="/login" className="font-semibold px-2 text-white hover:text-blue-500 transition-all duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
