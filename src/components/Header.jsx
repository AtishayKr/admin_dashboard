import React from 'react'
import './Header.css'
import { DeleteAllIcon } from '../assets'

function Header() {
  return (
    <div className='header'>
        <div className='searchBox'>
            <input 
            className='searchBar'
            type='text'
            name='searcBox'
            placeholder='Enter value...'/>
        </div>
        <div className='deleteBtn'>
            <img src={DeleteAllIcon} className="deleteIcon" alt="deleteIcon" />
        </div>
        
    </div>
  )
}

export default Header

