import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getData } from '../action/action';
import Userheader from './Userheader';

function Developers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const { loading, data, error } = useSelector((state) => state.getData);

  return (
    <>
      <Userheader />
      <div className="h-auto">
        <div className="text-center ">
          <h1 className="lg:text-6xl md:text-6xl sm:text-3xl text-2xl py-2">Developers</h1>
          <div className="pb-2">

            <p className="lg:text-xl md:text-xl text-md"><i className="fa-solid fa-laptop-code lg:text-2xl md:text-2xl text-xl mr-2"></i>
              Browse and Connect with Developers</p>
          </div>
        </div>
        <div className="w-[95%] mx-auto">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : data && data.length > 0 ? (
            data.map((ele, i) => (
              <div key={i} className=" border w-full mx-auto h-auto  rounded-md shadow-xl grid  grid-cols-1 sm:grid-cols-2 mmd:grid-cols-2 lg:grid-cols-2 mt-4 py-4">
                <div className="w-full   h-auto lg:flex md:flex justify-center items-center gap-4">
                  <div className="w-full h-[400px] flex justify-center sm:justify-center md:justify-center items-center ">
                    <dev className="px-4">

                      <img
                        className="w-[180px]   h-[180px] rounded-full"
                        src={ele.img || 'https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png'}
                        alt=""
                      />
                    </dev>

                  </div>
                  <div className="w-full h-[400px] flex justify-center sm:justify-center md:justify-center items-center ">
                    <div className="py-2 w-[300px] bg-[#C3DDFD]  rounded-lg text-center h-[200px]">
                      <h1 className="text-2xl">Developer</h1>
                      <p className="text-lg mt-2">
                        {ele.status} at <span>{ele.company}</span>
                      </p>
                      <p className="text-lg mt-2">{ele.location}</p>
                      <button
                        onClick={() => navigate(`/Profile/${ele.id}`)}
                        className="w-[120px] mx-auto px-4 py-2 text-white rounded-md bg-[#CA8A04]  mt-2"
                      >
                        Profile View
                      </button>
                    </div>
                  </div>
                </div>



                <div className="w-full flex justify-center  h-[400px]">
                  <div className="h-[380px] rounded-lg w-[200px] bg-[#BCF0DA] p-2">
                    <div className="px-4">
                      {ele.skills &&
                        ele.skills.split(',').map((skill, index) => (
                          <p className="pt-2" key={index}>
                            <i className="fa-solid fa-check mr-1" aria-hidden="true"></i>
                            {skill.trim()}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center m-10 text-3xl">No Developer Registered!</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Developers;
