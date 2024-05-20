import React from 'react'
import HeroImageHome from '../Elements/HeroImageHome'
import './HomeSection.css'
import Button from '../Elements/Button'

const HomeSection = () => {
  return (
    <div className='mt-16 font-poppins'>
        <div className='ml-28 flex'>
            <HeroImageHome/>
            <div className='ml-12 my-auto'>
                <h1 className='text-3xl font-semibold header-text flex justify-center'>Membawa Bisnis Lokal ke Tingkat Berikutnya, Melalui Era Digital</h1>
                <div className='mt-5'>
                    <Button background="green" text='white'>Hubungi Kami</Button>
                    <div className='block mt-3'>
                        <Button text="blue-400">Konsultasi Sekarang</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection