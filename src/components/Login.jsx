import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const initialState = {
  email: "",
  password: ""
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/devUsers'); 
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      errors.password = "Please enter your password.";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    const isValid = handleValidation();
    if (isValid) {
      const userExists = data.find(user => user.email === formData.email && user.password === formData.password);

      if (userExists) {
        localStorage.setItem('loggedInUser', JSON.stringify(userExists));
        setError({});
        alert('Login successfully');
        setFormData(initialState);
        navigate('/Profile');
      } else {
        setError({ form: "Invalid email or password." });
      }
    }
  };

  return (
    <>
      <Navbar/>
      <div className="flex bg-[#E8E8E8] w-full h-[540px] items-center justify-center">
        <div className="bg-gray-900 w-[350px] sm:w-[350px] md:[400px] lg:[450px] h-[450px] border-[2px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200">
          <div className="flex items-center py-4 px-8 font-semibold text-gray-500 flex-col">
            <h1 className="text-white text-2xl py-10">Login</h1>
            {error.form && <div className="text-red-700 text-[14px] mb-4">{error.form}</div>}
            <div className='w-full h-[70px]'>
              <input
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="email"
                placeholder="Enter email"
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
              />
              {error.email && <span className='text-red-700 text-[14px]'>{error.email}</span>}
            </div>
            <div className="w-full h-[70px]">
              <input
                onChange={handleChange}
                value={formData.password}
                className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Password"
                type="password"
                name="password"
              />
              {error.password && <span className='text-red-700 text-[14px]'>{error.password}</span>}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[2px] border-gray-700 hover:border-blue-700 transition-all duration-200"
              type="button"
            >
              Submit
            </button>
            <p className='pt-4'>
              Don't have an account?
              <Link to="/Signup" className="font-semibold hover:underline text-white px-2 hover:text-blue-500 transition-all duration-200">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
