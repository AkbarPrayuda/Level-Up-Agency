import React from 'react'
import HeroImageHome from '../Elements/HeroImageHome'
// import './HomeSection.css'
import Buttons from '../Elements/Button/Buttons'
import WhiteButton from '../Elements/Button/WhiteButton'

const HomeSection = () => {
  return (
        <div className='flex flex-col items-center justify-between h-full py-14 md:flex-row md:gap-9 lg:gap-9' >
            <HeroImageHome/>
            <div className='flex flex-col items-center md:w-1/2 gap-9'>
                <h1 className='py-4 text-2xl font-semibold text-center md:text-start lg:text-5xl md:py-0'>Membawa Bisnis Lokal ke Tingkat Berikutnya, Melalui Era Digital</h1>
                <div className='flex flex-col items-center gap-4 md:gap-7'>
                    <Buttons text="text-white" bg="bg-lime-main">Hubungi Kami</Buttons>
                    <WhiteButton text="text-blue-400">Konsultasi Sekarang</WhiteButton>
                </div>
            </div>
        </div>
  )
}

export default HomeSection