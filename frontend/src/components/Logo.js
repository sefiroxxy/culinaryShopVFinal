import React from 'react'
import imagenLogo from "../assest/pucheroMarket.jpg"

const Logo = ({w,h}) => {
  return (
    <svg width={w} height={h} className='css-1j8o68f'>
      <image height={h} width={w} href={imagenLogo} alt="imagen"/>
    </svg>
  )
}

export default Logo