import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from '../action/action';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import Userheader from './Userheader';

const initialProfileState = {
  name: '',
  email: '',
  img: "",
  status: '',
  website: '',
  location: '',
  company: '',
  skills: '',
  bio: ''

}

function EditeProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()
  const [data, setData] = useState(initialProfileState);


  const { profile } = useSelector((state) => state.userProfile);

  const [error, setError] = useState({});


  useEffect(() => {

    dispatch(fetchProfile(id));

  }, [id, dispatch]);

  useEffect(() => {
    if (profile && profile) {
      setData({
        name: profile.name || '',
        email: profile.email || '',
        status: profile.status || '',
        website: profile.website || '',
        location: profile.location || '',
        company: profile.company || '',
        skills: profile.skills || '',
        bio: profile.bio || '',
        id: profile.id || '',
        img: profile.img || '',

      });
    }
  }, [profile]);

  const handleValidation = () => {
    const errors = {};
    if (!profile.status) {
      errors.status = 'Status is required';
    }
    if (!profile.email) {
      errors.email = 'Email is required';
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  }

  const handleProfileChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch(updateProfile(data));
      navigate(`/Profile/${id}`);
    }
  }
  console.log(profile, 'user log');


  return (
    <>
      <Userheader />
      <div className="max-w-md drop-shadow-lg shadow-lg mx-auto px-8 py-4 mt-4 border rounded-md">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <select
              className="border rounded p-2 w-full"
              name="status"
              value={data.status}
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
              value={data.company}
              onChange={handleProfileChange}
              placeholder='Company'
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="website"
              value={data.website}
              onChange={handleProfileChange}
              placeholder='Website'
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="location"
              value={data.location}
              onChange={handleProfileChange}
              placeholder='Location'
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="skills"
              value={data.skills}
              onChange={handleProfileChange}
              placeholder='Skills'
              className="border rounded p-2 w-full"
            />
            {error.skills && <span className='text-red-500 text-sm'>{error.skills}</span>}
          </div>

          <div className="mb-2">
            <textarea
              type="text"
              name="bio"
              value={data.bio}
              onChange={handleProfileChange}
              placeholder='Message'
              className="border rounded p-1 w-full"
            >
            </textarea>

          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-green-500 text-white text-center w-[80%] py-2 mx-auto rounded-full"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default EditeProfile;



