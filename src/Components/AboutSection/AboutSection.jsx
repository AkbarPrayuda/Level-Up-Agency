import React from 'react'
import About1 from '../Elements/About1'

function AboutSection() {
  return (
    <div className='flex flex-col items-center gap-10 md:justify-center md:flex-row-reverse' id='about'>
        <About1 />
        <div className='flex flex-col gap-6 text-center md:text-start'>
            <h1 className='text-4xl font-semibold md:text-4xl lg:text-6xl text-lime-main font-poppins'>Mudah Dan Cepat.</h1>
            <p className='text-2xl font-semibold'>
                Memperluas jangkauan dan meningkatkan kehadiran digital UMKM dan mendorong mereka dengan digitalisasi melalui website yang menarik dan modern.
            </p>
        </div>
    </div>
  )
}

export default AboutSection