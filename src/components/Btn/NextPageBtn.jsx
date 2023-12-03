import React from 'react'
import './NextPageBtn.css'
import { Right } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNumber } from '../../features/pages/pageNumberSlice'

export default function NextPageBtn({disabled=false}) {

  const pageNumber = useSelector((state) => (state.pageNumber.value));
  const usersData = useSelector((state) => (state.users.value))
  const totalPage = Math.ceil(usersData.length / 10);
  const dispatch = useDispatch();

  const clickHandle = () => {
    console.log("clicked")
    if(!disabled && pageNumber !== totalPage) {
      dispatch(setPageNumber(pageNumber + 1));
    }
  }

  return (
    <>
      <div onClick={clickHandle} className={disabled ? 'nextPageBtn disableNextBtn' : 'nextPageBtn'}>
        <div>
          <img className='nextPageBtnImg' src={Right} name="LastBtn" alt='LastBtnIcon' />
        </div>
      </div>
    </>
  )
}
