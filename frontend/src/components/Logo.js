import React from 'react'
import imagenLogo from "../assest/pucheroMarket.jpg"

const Logo = ({ w, h }) => {
  return (
    <svg width={w} height={h}>
      <image height={h} width={w} href={imagenLogo} alt="imagen" />
    </svg>

  )
}

export default Logo