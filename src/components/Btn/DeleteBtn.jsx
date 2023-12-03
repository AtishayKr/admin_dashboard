import React from 'react'
import {DeleteIcon} from '../../assets'
import './DeleteBtn.css'

export default function DeleteBtn({onClick}) {
  return (
    <div onClick={onClick} className='deleteButton'>
      <img className='deleteIcon'  src={DeleteIcon} name="deleteIcon" alt='deleteIcon' />
    </div>
  )
}
