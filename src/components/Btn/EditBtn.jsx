import React from 'react'
import {EditIcon} from '../../assets'
import './EditBtn.css'

export default function EditBtn() {
  return (
    <div className='editButton'>
      <img className='editIcon'  src={EditIcon} name="deleteIcon" alt='deleteIcon' />
    </div>
  )
}
