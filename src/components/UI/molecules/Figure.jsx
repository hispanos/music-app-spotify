import React from 'react'
import Image from '../atoms/Image'
import image from '../../../assets/images/women-listening-music.jpg'

const Figure = () => {
  return (
    <figure>
        <Image src={image} alt="Mujer escuchando musica" className='login__image' />
        <figcaption className='login__text'>Disfruta de la buena música</figcaption>
    </figure>
  )
}

export default Figure