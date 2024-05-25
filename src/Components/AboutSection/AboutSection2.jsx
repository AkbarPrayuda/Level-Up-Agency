import React from 'react'
import AboutImage from '../Elements/AboutImage'

function AboutSection2() {
  return (
    <div className='flex flex-col items-center gap-10 md:justify-between md:flex-row' id='about'>
        <AboutImage src='./svg/About2.svg' />
        <div className='flex flex-col gap-6 text-center md:text-start'>
            <h1 className='text-4xl font-semibold md:text-4xl lg:text-6xl text-lime-main font-poppins'>Buat Website anda Sekarang!</h1>
            <p className='text-2xl font-semibold'>
              ciptakan website anda untuk meningkatkan jangkauan dari bisnis anda dengan cepat melalui digitalisasi dan teknologi digital
            </p>
        </div>
    </div>
  )
}

export default AboutSection2