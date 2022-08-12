import React from 'react'

export default function Notification({children, addClass}) {
  return (
    <div className={`notification off ${addClass}`}>
        <p>{children}</p>
    </div>
  )
}
