import React, { useEffect, useState } from 'react'
import {Pagination} from './index'
import './Footer.css'
import { useSelector } from 'react-redux'

export default function Footer() {
  
  const [countCheck, setCountCheck] = useState(0);
  const users = useSelector((state) => (state.users.value))

  useEffect(() => {
    let count = 0;
    for(let i=0; i<users.length; i++) {
      if(users[i].checked == true){
        
        count++;
      }
    }
    setCountCheck(count)
  }, [users])
  
  console.log(countCheck)
  return (
    <>
        <div className='footerContainer'>
            <div className='rightContiner'>
                {countCheck} of {users.length} row(s) selected
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    </>
  )
}
