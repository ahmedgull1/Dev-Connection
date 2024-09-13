import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchProfile } from '../action/action';
import { useNavigate } from 'react-router';
import Userheader from './Userheader';

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, loading, error } = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Userheader/>
      {profile ? (
        <div className='py-12 px-4 md:px-32 bg-gray-100'>
          <div className='bg-white p-6 rounded-md shadow-md mb-4'>
            <button onClick={() => navigate('/developers')} className='mb-4 px-2 py-2 hover:bg-green-500  bg-red-500 text-white rounded-md'>
              Back To Profiles
            </button>
            <button onClick={() => navigate(`/edit_profile/${profile.id}`)} className='mb-4 ml-2 px-2 hover:bg-green-500 py-2 bg-red-500 text-white rounded-md'>
              Edit Profile
            </button>
            <div className='flex flex-col items-center gap-4 py-8'>
              <div className='rounded-full overflow-hidden w-[150px] h-[150px] md:h-[190px] md:w-[190px]  lg:h-[220px] lg:w-[220px] border border-red-500'>
                <img
                  className='h-full w-full rounded-full object-cover'
                  src={profile.img || 'https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-6/274948971_948842736020645_2825291293092829298_n.jpg?stp=dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeH0hGIeu0WBlOX-KApwJjtVcRPSmpTsaHlxE9KalOxoeePezSleXtuLuvkHHuUN5gT6AYE_JVJ2NBSjA9B7cQqv&_nc_ohc=OZu5qb1F2QQAX-Li1eF&_nc_ht=scontent.flhe3-2.fna&oh=00_AfBIQdcNJ7JFLZjkmOv9iDyA3HRtTdL6FfVuA3sgjX1Jyw&oe=656E4C02'}
                  alt='User Avatar'
                />
              </div>
              <h1 className='text-3xl font-bold'>{profile.status} {profile.name}</h1>
              {/* <h3 className='text-lg'>{profile.status}</h3> */}
              <h3 className='text-lg py-2'> At {profile.company}, {profile.location}</h3>
            </div>
          </div>
          <div className='bg-white p-6 rounded-md shadow-md mb-4'>
            <h2 className='text-2xl font-bold mb-2 capitalize'>About Developer</h2>
            <p className='text-lg truncate'>{profile.bio}</p>
          </div>
          <div className='bg-white p-6 rounded-md shadow-md mb-4'>
            <h2 className='text-2xl font-bold mb-2'>Skills</h2>
            <ul className='flex flex-wrap px-12 gap-5'>
              {profile.skills ? (
                profile.skills.split(',').map((skill, index) => (
                  <li key={index} className='capitalize flex flex-col items-center'>
                    <span><i className="fa-solid fa-check"></i></span> {skill.trim()}
                  </li>
                ))
              ) : (
                <li>No Skills</li>
              )}
            </ul>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full p-6 rounded-md shadow-md mb-4 bg-white">
              <h1 className='text-2xl font-bold mb-2'>Education</h1>
              <p>Nothing added for Education</p>
            </div>
            <div className="w-full p-6 rounded-md shadow-md mb-4 bg-white">
              <h1 className='text-2xl font-bold mb-2'>Experience</h1>
              <p>Nothing added for Experience</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No Profile Data Available</p>
      )}
    </>
  );
}

export default Profile;
