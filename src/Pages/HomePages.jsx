import React from 'react'
import NavbarComponents from '../Components/Navbar/NavbarComponents'
import HomeSection from '../Components/HomeSection/HomeSection'

const HomePages = () => {
  return (
    <div className='mx-auto md:py-4 lg:w-10/12 md:w-5/6'>
      <NavbarComponents/>
      <HomeSection/>
    </div>
  )
}

export default HomePages