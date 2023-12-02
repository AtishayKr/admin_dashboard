import React from 'react'
import './FirstPageBtn.css'
import { DoubleLeft } from '../../assets'

export default function FirstPageBtn() {
  return (
    <>
      <div className='firstPageBtn'>
        <div>
          <img className='firstPageBtnImg' src={DoubleLeft} name="LastBtn" alt='LastBtnIcon' />
        </div>
      </div>
    </>
  )
}
