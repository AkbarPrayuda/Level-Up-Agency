import React from 'react'

const Buttons = (props) => {
    if(props.background === ''){
        props.background = slate
    }
  return (
    <button class={`bg-${props.background}-500 hover:bg-${props.background}-700 shadow-2xl text-${props.text} font-bold py-2 px-4 rounded-lg w-96 h-12`}>
        {props.children}
    </button>
  )
}

export default Buttons