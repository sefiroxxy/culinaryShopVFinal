import React from 'react'
import Logo from './Logo'

// logos buscar (search) en react icons
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

// logos de usuario 
import { FaRegCircleUser } from "react-icons/fa6";

// logo de carrito
import { FaCartShopping } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import Login from '../pages/Login';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>

        <div className=''>
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='Buscar Productos' className='w-full outline-none pl-2' />
          <div className='text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full text-white'>
            <IoSearch />
          </div>
        </div>

        <div className='flex items-center gap-7'>

          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser />
          </div>

          <div className='text-2xl relative'>
            <span><FaCartShopping /></span>
            <div className='bg-blue-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-2'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"} className='px-2 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-700'>Login</Link>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header