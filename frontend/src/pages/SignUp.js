import React, { useState } from 'react'

import imagenLogin from "../assest/signin.gif"

//icono de react ojo (mostrar)
import { FaEye } from "react-icons/fa";

//icono de react ojo-slash (no mostrar)
import { FaEyeSlash } from "react-icons/fa";

//
import { Await, Link } from 'react-router-dom';
import imageTobase64 from '../helpers/imageToBase64';

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    porfilePicture: "",

  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleUploadPic = async(e) => {
    const file = e.target.files[0]

    const imagePic = await imageTobase64(file)

    setData((preve)=>{
      return{
        ...preve,
        porfilePicture: imagePic
      }
    })
  }

  // Advertencia para que al momento de no colocar @ o completar correo se deuelve el aviso
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // Parte de la comprovacion de login los datos
  console.log("data login", data)

  return (
    <section id="sign-up">

      <div className='mx-auto container p-4'>

        <div className='bg-white p-5 w-full max-w-sm mx-auto'>

          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
              <img src={data.porfilePicture || imagenLogin} alt='login icono' />
            </div>

            <form>
              <label>
                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                  Cargar Imgen
                </div>
                <input type='file' className='hidden' onChange={handleUploadPic}/>
              </label>
            </form>
          </div>

          <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>

            <div className='grid'>
              <label>Nombre :</label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='text'
                  placeholder='Ingresa tu Nombre'
                  name='name'
                  value={data.name}
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div className='grid'>
              <label>Correo :</label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='email'
                  placeholder='Ingresar Correo'
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div>
              <label>Contraseña :</label>
              <div className='bg-slate-200 p-2 flex'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Ingresar Contraseña'
                  value={data.password}
                  name='password'
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent' />
                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                  <span>
                    {
                      showPassword ? (
                        <FaEyeSlash />
                      )
                        :
                        (
                          <FaEye />
                        )
                    }
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label>Confirmar Contraseña :</label>
              <div className='bg-slate-200 p-2 flex'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='Confirma Contraseña'
                  value={data.confirmPassword}
                  name='confirmPassword'
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent' />
                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
                  <span>
                    {
                      showConfirmPassword ? (
                        <FaEyeSlash />
                      )
                        :
                        (
                          <FaEye />
                        )
                    }
                  </span>
                </div>
              </div>
            </div>

            <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Registrarse</button>
          </form>
          <p className='my-5'>¿ Ya tienes cuenta ? <Link to={"/login"} className='text-blue-600 hover:text-blue-700 hover:underline'>Login</Link></p>
        </div>
      </div>

    </section>
  )
}

export default SignUp