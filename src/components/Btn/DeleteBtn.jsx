import React from 'react'
import {DeleteIcon} from '../../assets'
import './DeleteBtn.css'

export default function DeleteBtn() {
  return (
    <div className='deleteButton'>
      <img className='deleteIcon'  src={DeleteIcon} name="deleteIcon" alt='deleteIcon' />
    </div>
  )
}
