import React from 'react'
import {SaveIcon} from '../../assets'
import './SaveBtn.css'

export default function SaveBtn({onClick}) {
    return (
        <div onClick={onClick} className='saveButton'>
          <img className='saveIcon'  src={SaveIcon} name="saveIcon" alt='saveIcon' />
        </div>
    )
}
