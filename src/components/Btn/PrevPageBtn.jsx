import React from 'react'
import './PrevPageBtn.css'
import { Left } from '../../assets'

export default function PrevPageBtn() {
  return (
    <>
      <div className='prevPageBtn'>
        <div>
          <img className='prevpageBtnImg' src={Left} name="LastBtn" alt='LastBtnIcon' />
        </div>
      </div>
    </>
  )
}
