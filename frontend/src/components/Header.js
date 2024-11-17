import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa"
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}>
            <Logo w={90} h={50}/>
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
          <input type='text' placeholder='Buscar Productos Aqui ...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full text-white'>
            <FaSearch />
          </div>
        </div>

        <div className='flex items-center gap-8'>

          <div className='text-4x1 cursor-pointer'>
            <FaRegUser />
          </div>

          <div className='text-4x1 cursor-pointer relative'>

            <span><FaShoppingCart /></span>

            <div className='bg-blue-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-4'>
              <p className='text-sm'>0</p>
            </div>

          </div>

          <div>
            <Link to={"/login"} className='px-2 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-700'>Iniciar Sesion</Link>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header