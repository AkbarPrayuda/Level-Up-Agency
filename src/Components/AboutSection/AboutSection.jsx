import React from 'react'
import AboutImage from '../Elements/AboutImage'

function AboutSection() {
  return (
    <div className='flex flex-col items-center gap-10 md:justify-between md:flex-row-reverse'>
        <AboutImage src='./svg/About1.svg' />
        <div className='flex flex-col gap-6 text-center md:text-start'>
            <h1 className='text-4xl font-semibold md:text-4xl lg:text-6xl text-lime-main font-poppins'>Apa itu LevelUp?.</h1>
            <p className='text-2xl font-semibold'>
                Wadah untuk Memperluas jangkauan dan meningkatkan kehadiran digital UMKM, dan mendorong mereka dengan digitalisasi melalui website yang menarik dan modern.
            </p>
        </div>
    </div>
  )
}

export default AboutSection