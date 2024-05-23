import React from 'react'

const Buttons = (props) => {

  return (
    <button class={`bg-${props.background} ${props.text} hover:bg-${props.backgroundHover}/75 font-semibold rounded-lg text-2xl w-96 h-16 shadow-xl`}>
        {props.children}
    </button>
  )
}

export default Buttons