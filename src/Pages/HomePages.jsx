import React from 'react'
import NavbarComponents from '../Components/Navbar/NavbarComponents'
import HomeSection from '../Components/HomeSection/HomeSection'
import AboutSection from '../Components/AboutSection/AboutSection'
import AboutSection2 from '../Components/AboutSection/AboutSection2'

const HomePages = () => {
  return (
    <>
      <div className='mx-auto md:py-4 lg:w-10/12 md:w-5/6'>
        <NavbarComponents/>
        <HomeSection/>
      </div>
      <div className="flex items-center justify-center h-screen mx-auto md:py-4 lg:w-10/12 md:w-5/6">
        <AboutSection />
      </div>
      <div className="flex items-center justify-center h-screen mx-auto md:py-4 lg:w-10/12 md:w-5/6">
        <AboutSection2 />
      </div>
    </>
  )
}

export default HomePages