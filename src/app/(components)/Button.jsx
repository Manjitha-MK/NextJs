'use client'
import React from 'react'

function Button() {
    
    const handleClick = () =>{
        alert("hello MK")
    }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Button
