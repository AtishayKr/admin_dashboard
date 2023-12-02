import React from 'react'
import './NextPageBtn.css'
import { Right } from '../../assets'

export default function NextPageBtn() {
  return (
    <>
      <div className='nextPageBtn'>
        <div>
          <img className='nextPageBtnImg' src={Right} name="LastBtn" alt='LastBtnIcon' />
        </div>
      </div>
    </>
  )
}
