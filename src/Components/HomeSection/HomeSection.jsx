import React from 'react'
import HeroImageHome from '../Elements/HeroImageHome'
// import './HomeSection.css'
import Buttons from '../Elements/Buttons'

const HomeSection = () => {
  return (
        <div className='flex flex-col items-center justify-between md:flex-row md:gap-9 lg:gap-9'>
            <HeroImageHome/>
            <div className='flex flex-col items-center md:w-1/2 gap-9'>
                <h1 className='py-4 text-3xl font-semibold text-center md:text-start md:text-2xl lg:text-5xl md:py-0'>Membawa Bisnis Lokal ke Tingkat Berikutnya, Melalui Era Digital</h1>
                <div className='flex flex-col items-center gap-4 md:gap-7'>
                    <Buttons text="text-white" bg="bg-lime-main" bgHover="bg-lime-main">Hubungi Kami</Buttons>
                    <Buttons text="text-blue-400" bg="bg-white" bgHover="bg-stone-200">Konsultasi Sekarang</Buttons>
                </div>
            </div>
        </div>
  )
}

export default HomeSection