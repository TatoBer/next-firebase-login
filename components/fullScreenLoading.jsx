import React from 'react'
import { VscLoading } from 'react-icons/vsc';


export default function FullScreenLoading() {
  return (
    <div className='full-screen-loading'>
        <VscLoading />
        <strong>Loading...</strong>
    </div>
  )
}
