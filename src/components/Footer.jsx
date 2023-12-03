import React from 'react'
import {Pagination} from './index'
import './Footer.css'
import { useSelector } from 'react-redux'

export default function Footer() {
  
  const users = useSelector((state) => (state.users.value[1]))
  return (
    <>
        <div className='footerContainer'>
            <div className='rightContiner'>
                0 of {users.length} row(s) selected
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    </>
  )
}
