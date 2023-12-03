import React from 'react'
import './FirstPageBtn.css'
import { DoubleLeft } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNumber } from '../../features/pages/pageNumberSlice'

export default function FirstPageBtn({disabled = false}) {

  const pageNumber = useSelector((state) => (state.pageNumber.value));
  const dispatch = useDispatch();

  const clickHandle = () => {
    if(!disabled && pageNumber > 1) {
      dispatch(setPageNumber(1));
    }
  }
  return (
    <>
      <div className={disabled ? 'firstPageBtn disableFirstpageBtn' : 'firstPageBtn'} onClick={clickHandle}>
        <div>
          <img className='firstPageBtnImg' src={DoubleLeft} name="LastBtn" alt='LastBtnIcon' />
        </div>
      </div>
    </>
  )
}
