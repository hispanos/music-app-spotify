import React from 'react'
import image from '../../../assets/images/default.png'

const Image = ({src=image, alt="Imagen", className=""}) => {
  return (
    <img src={src} alt={alt} className={className} />
  )
}

export default Image