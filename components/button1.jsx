import React from 'react'

export default function Button1({children, onClick}) {
  return (
    <button class="your-button" onClick={onClick} >{children}</button>
  )
}
