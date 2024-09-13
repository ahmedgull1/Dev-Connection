
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, createProfile } from '../action/action';
import { useNavigate } from 'react-router';
import Userheader from './Userheader';

const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  bio: '',
};

function CreateProfile() {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const userid = JSON.parse(localStorage.getItem('userinfo')) || null;
  
  const { data} = useSelector((state) => state.profile);

  useEffect(() => {
    if (userid) {
      dispatch(fetchProfile(userid));
    }
    
  }, [userid, dispatch]);

  useEffect(() => {
    console.log('Profile Data:', data);
  }, [data]);

  const handleProfileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const errors = {};
    if (!formData.status) {
      errors.status = "Status is required";
    }
    if (!formData.skills) {
      errors.skills = "Skills are required";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (isValid) {
      dispatch(createProfile({ ...formData, ...data }));
      setFormData(initialState);
      setTimeout(() => {
        navigate('/Developers');
      }, 3000);
    }
  };
console.log(data, 'test data');
console.log(userid, 'test userid');

  return (
    <>
      <Userheader />
      <div className='max-w-md mx-auto border h-auto mt-8 px-6 py-4 rounded-lg shadow-lg bg-gray-100'>
        <h1 className="font-bold mb-2">Create Your Profile</h1>
        <h2 className="text-gray-700 mb-2">
          <i className="fas fa-user text-lg mr-2"></i> Let's get some information to make your profile
        </h2>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <select
              className="border rounded p-2 w-full"
              name="status"
              value={formData.status}
              onChange={handleProfileChange}
            >
              <option value="" disabled>Select status</option>
              <option value='Developer'>Developer</option>
              <option value='Junior Developer'>Junior Developer</option>
              <option value='Senior Developer'>Senior Developer</option>
              <option value='Manager'>Manager</option>
              <option value='Student Or Learning'>Student</option>
              <option value='Instructor Or Teacher'>Instructor</option>
              <option value='Intern'>Intern</option>
              <option value='Other'>Other</option>
            </select>
            {error.status && <span className='text-red-500 text-sm'>{error.status}</span>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleProfileChange}
              placeholder='Company'
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleProfileChange}
              placeholder='Website'
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleProfileChange}
              placeholder='Location'
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleProfileChange}
              placeholder='Skills'
              className="border rounded p-2 w-full"
            />
            {error.skills && <span className='text-red-500 text-sm'>{error.skills}</span>}
          </div>
          <div className="mb-4 ">
            <textarea
              type="text"
              name="bio"
              value={formData.git}
              onChange={handleProfileChange}
              placeholder='Message'
              className="border rounded p-1 w-full x"
            >
            </textarea>
            
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-green-500 text-white text-center w-[80%] py-2 mx-auto rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateProfile;
