import React from 'react'
import NavbarComponents from '../Components/Navbar/NavbarComponents'
import HomeSection from '../Components/HomeSection/HomeSection'

const HomePages = () => {
  return (
    <div className='py-8 mx-auto lg:w-10/12 md:w-5/6'>
      <NavbarComponents/>
      <HomeSection/>
    </div>
  )
}

export default HomePages