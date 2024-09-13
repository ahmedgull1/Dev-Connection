import React from 'react'
import { Link } from 'react-router-dom'
function Maindev() {
    return (

        <>
            <div className='w-full text-center bg-gradient-to-br from-blue-300 to-purple-600 h-sceen '>
                <div className=" h-screen text-center w-[350px] sm:w-[400px]  md:w-[450px]  lg:w-[480px] mx-auto flex flex-col justify-center items-center gap-6">
                    <h1 className='font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white'>DevConnections</h1>
                    <p className='w-[320px] sm:w-[400px] md:w-[450px] lg:w-[500px] lg:text-lg  text-white'>Create a developer profile/portfolio, share posts, and interact with other developers.
                    </p>
                    <div className=" w-[209px] mx-auto flex gap-4 ">
                        <Link to="/Signup">
                            <button className='py-2 rounded-3xl px-6 hover:bg-[#ce9136] bg-[#C27803] text-white '>Sign Up</button>
                        </Link>
                        <Link to="/login">
                            <button className='py-2 bg-white rounded-full px-6 text-black'>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Maindev