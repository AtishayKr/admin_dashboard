import React from 'react'
import './LastPageBtn.css'
import { DoubleRight } from '../../assets'

export default function LastPageBtn() {
  return (
    <>
      <div className='lastPageBtnContainer'>
        <div>
          <img className='lastPageBtnImg' src={DoubleRight} name="LastBtn" alt='LastBtnIcon' />
        </div>
      </div>
    </>
  )
}
