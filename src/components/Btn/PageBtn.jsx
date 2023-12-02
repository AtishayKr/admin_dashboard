import React from 'react'
import './PageBtn.css'

export default function FirstPageBtn({number}) {
  return (
    <>
      <div className='firstPageBtn'>
        <div>
          {number}
        </div>
      </div>
    </>
  )
}