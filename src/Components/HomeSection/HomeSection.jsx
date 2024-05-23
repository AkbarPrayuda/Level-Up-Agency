import React from 'react'
import HeroImageHome from '../Elements/HeroImageHome'
// import './HomeSection.css'
import Buttons from '../Elements/Buttons'

const HomeSection = () => {
  return (
        <div className='flex items-center justify-between '>
            <HeroImageHome/>
            <div className='flex flex-col w-1/2 gap-9'>
                <h1 className='text-5xl font-semibold'>Membawa Bisnis Lokal ke Tingkat Berikutnya, Melalui Era Digital</h1>
                <div className='flex flex-col items-center gap-7'>
                    <Buttons text='text-white' background='lime-main' backgroundHover='lime-main'>Hubungi Kami</Buttons>
                    <Buttons text="text-blue-400" background='bg-white' backgroundHover='stone-200'>Konsultasi Sekarang</Buttons>
                </div>
            </div>
        </div>
  )
}

export default HomeSection