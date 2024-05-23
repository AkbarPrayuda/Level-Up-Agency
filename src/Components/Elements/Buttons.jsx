import React from 'react'

const Buttons = (props) => {
  return (
    <button class={`bg-${props.background} ${props.text} hover:bg-${props.backgroundHover}/75 font-semibold rounded-lg md:text-xl lg:text-2xl text-2xl w-96 md:w-72 md:h-12 h-16 lg:w-96 lg:h-16 shadow-xl`}>
        {props.children}
    </button>
  )
}

export default Buttons