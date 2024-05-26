import React from 'react'

const WhiteButton = (props) => {
  const phoneNumber = '6285756285298'
  const message = 'Halo, saya ingin kosultasi dengan LevelUp!'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  return (
    <a href={whatsappUrl}>
      <button className={`bg-white hover:bg-stone-100 ${props.text} font-semibold rounded-lg md:text-xl lg:text-2xl text-2xl w-72 md:w-72 md:h-12 h-16 lg:w-96 lg:h-16 shadow-xl border-black`}>
        {props.children}
      </button>
    </a>
  )
}

export default WhiteButton