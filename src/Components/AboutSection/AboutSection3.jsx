import React from 'react'
import AboutImage from '../Elements/AboutImage'
import LevelUpLogo from '../Elements/LevelUpLogo'

function AboutSection3() {
  return (
    <div className='flex flex-col items-center gap-10 md:justify-between md:flex-row'>
        <LevelUpLogo iniClass={'w-auto h-24 lg:h-36 drop-shadow-2xl md:h-16 md:h-16 rounded-3xl'} />
        <div className='flex flex-col gap-6 text-center md:text-start'>
            <h1 className='text-4xl font-semibold md:text-4xl lg:text-6xl text-lime-main font-poppins'>Kenapa LevelUp?</h1>
            <p className='text-2xl font-semibold md:text-xl lg:text-2xl'>
            dengan teknologi terbaru kami, website anda selalu optimal dan aman. Kecepatan dan desain responsif memberikan pengalaman terbaik. Rutin kami update dan integrasi platform untuk kinerja maksimal.
            </p>
        </div>
    </div>
  )
}

export default AboutSection3