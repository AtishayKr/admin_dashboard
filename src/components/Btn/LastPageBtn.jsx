import React from 'react'
import './LastPageBtn.css'
import { DoubleRight } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNumber } from '../../features/pages/pageNumberSlice'

export default function LastPageBtn({disabled = false}) {

  const pageNumber = useSelector((state) => (state.pageNumber.value));
  const usersData = useSelector((state) => (state.users.value))
  const totalPage = Math.ceil(usersData.length / 10);
  const dispatch = useDispatch();

  const clickHandle = () => {
    console.log("clicked")
    if(!disabled && pageNumber !== totalPage) {
      dispatch(setPageNumber(totalPage));
    }
  }

  return (
    <>
      <div className={disabled ? 'lastPageBtnContainer disableLastBtn' : 'lastPageBtnContainer'} onClick={clickHandle}>
        <div>
          <img className='lastPageBtnImg' src={DoubleRight} name="LastBtn" alt='LastBtnIcon' />
        </div>
      </div>
    </>
  )
}
