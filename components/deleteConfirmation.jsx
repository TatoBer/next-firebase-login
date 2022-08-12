import React from 'react'
import Button1 from './button1'
import LogOutButton from './logOutButton'

export default function DeleteConfirmation({ handleDelete }) {

  const handleCancel = ()=>{
    document.querySelector(".delete-confirmation").classList.add("off")
  }

  return (
    <div className='delete-confirmation off'>
        <div>
            <strong>DELETE</strong>
            <p>Are you sure you want to delete this note?</p>
            <div>
            <LogOutButton onClick={handleDelete} >DELETE</LogOutButton>
            <Button1 onClick={handleCancel} >CANCEL</Button1>
            </div>
        </div>
    </div>
  )
}
