import React from 'react'

export default function Button1({children, onClick, disabled}) {
  return (
    <button class="your-button" disabled={disabled} onClick={onClick} >{children}</button>
  )
}
