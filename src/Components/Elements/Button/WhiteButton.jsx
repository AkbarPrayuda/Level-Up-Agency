import React from 'react'

const WhiteButton = (props) => {
  return (
    <button className={`bg-white hover:bg-stone-100 ${props.text} font-semibold rounded-lg md:text-xl lg:text-2xl text-2xl w-72 md:w-72 md:h-12 h-16 lg:w-96 lg:h-16 shadow-xl border-black`}>
        {props.children}
    </button>
  )
}

export default WhiteButton