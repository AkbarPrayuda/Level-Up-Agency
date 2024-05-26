import React from 'react'

function AboutImage(props) {
  return (
    <img src={props.src} alt="" className='w-auto h-64 lg:h-96 md:h-48 rounded-3xl' />
  )
}

export default AboutImage