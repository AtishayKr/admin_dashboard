import React from 'react'
import './PageBtn.css'
import { useDispatch } from 'react-redux'
import { setPageNumber } from '../../features/pages/pageNumberSlice'

export default function FirstPageBtn({number}) {

  const dispatch = useDispatch();
  
  const clickHandle = () => {
    dispatch(setPageNumber(number))
  }

  return (
    <>
      <div className='firstPageBtn' onClick={clickHandle}>
        <div>
          {number}
        </div>
      </div>
    </>
  )
}