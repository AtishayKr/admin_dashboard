import React from 'react'
import {Pagination} from './index'
import './Footer.css'

export default function Footer() {
  return (
    <>
        <div className='footerContainer'>
            <div className='rightContiner'>
                0 of 46 row(s) selected
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    </>
  )
}
