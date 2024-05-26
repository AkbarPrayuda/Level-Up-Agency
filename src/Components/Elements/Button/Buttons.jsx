import React from 'react'

const Buttons = (props) => {

  const phoneNumber = '6285756285298'
  const message = 'Halo, saya ingin berbincang mengenai LevelUp!'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a href={whatsappUrl} target='_blank' rel="noopener noreferrer">
      <button className={`${props.bg} ${props.text} hover:bg-lime-main/50 font-semibold rounded-lg md:text-xl lg:text-2xl text-2xl w-72 md:w-72 md:h-12 h-16 lg:w-96 lg:h-16 shadow-xl`}>
        {props.children}
      </button>
    </a>
  )
}

export default Buttons