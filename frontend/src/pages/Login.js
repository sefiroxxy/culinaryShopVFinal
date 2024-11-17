import React from 'react'
import loginIcons from "../assest/signin.gif"

const Login = () => {
    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img scr={loginIcons} alt="login icons" />
                    </div>

                    <form>
                        <div className='grid'>
                            <label>Correo: </label>
                            <div className='bg-slate-200'>
                                <input type="email" placeholder='Ingresar Correo' className='w-full h-full outline-none' />
                            </div>
                        </div>

                        <div>
                            <label>Contraseña: </label>
                            <div className='bg-slate-200'>
                                <input type="password" placeholder='Ingresar Contraseña' className='w-full h-full outline-none' />
                            </div>
                        </div>

                        <button>Login</button>
                    </form>

                </div>

            </div>
        </section>

    )
}

export default Login
