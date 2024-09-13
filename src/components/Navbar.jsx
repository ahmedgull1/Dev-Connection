import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='bg-gradient-to-br from-blue-400 to-purple-600 sticky top-0 z-50 w-full px-4 sm:px-12 py-4 flex justify-between items-center'>
            <Link to='/'>
            <ul className=''>
                    <h1 className=' hover:text-[#CF901A] text-2xl text-white '><i class="fa-solid fa-code mr-1 text-xl "></i> DevConnections</h1>
                    {/* <h1 className=' hover:text-[#CF901A] text-2xl text-white '></h1> */}
                </ul>
            </Link>

            <ul className='sm:flex md:flex lg:flex  text-white  gap-2'>
                <Link to="/developers">
                    <li className='hover:text-[#CF901A] text-lg '>Developers</li>
                </Link>
                <Link to="/Signup">
                    <li className='hover:text-[#CF901A] text-lg'>Register</li>
                </Link>
                <Link to="/login">
                    <li className='hover:text-[#CF901A] text-lg'>Login</li>
                </Link>

            </ul>
        </div>
    )
}

export default Navbar