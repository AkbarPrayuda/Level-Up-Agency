import React from 'react'
import NavbarComponents from '../Components/Navbar/NavbarComponents'
import HomeSection from '../Components/HomeSection/HomeSection'
import AboutSection from '../Components/AboutSection/AboutSection'
import AboutSection2 from '../Components/AboutSection/AboutSection2'
import AboutSection3 from '../Components/AboutSection/AboutSection3'

const HomePages = () => {
  return (
    <div className='relative z-50 mx-auto md:py-4 lg:w-10/12 md:w-5/6'>
        <NavbarComponents/>
      <div className='mx-auto md:py-4 lg:w-10/12 md:w-5/6' id='home'>
        <HomeSection/>
      </div>
      <div className="flex items-center justify-center h-screen mx-auto md:py-4 lg:w-10/12 md:w-5/6" id='about'>
        <AboutSection />
      </div>
      <div className="flex items-center justify-center h-screen mx-auto md:py-4 lg:w-10/12 md:w-5/6">
        <AboutSection3 />
      </div>
      <div className="flex items-center justify-center h-screen mx-auto md:py-4 lg:w-10/12 md:w-5/6" id='jasa'>
        <AboutSection2 />
      </div>
    </div>
  )
}

export default HomePages