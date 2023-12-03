import React from 'react'
import './PrevPageBtn.css'
import { Left } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNumber } from '../../features/pages/pageNumberSlice'

export default function PrevPageBtn({disabled=false}) {

  const pageNumber = useSelector((state) => (state.pageNumber.value));
  const dispatch = useDispatch();

  const clickHandle = () => {
    if(!disabled && pageNumber > 1) {
      dispatch(setPageNumber(pageNumber - 1));
    }
  }

  return (
    <>
      <div onClick={clickHandle} className={disabled ? 'prevPageBtn disablePrevBtn':  'prevPageBtn'}>
        <div>
          <img className='prevpageBtnImg' src={Left} name="LastBtn" alt='LastBtnIcon' />
        </div>
      </div>
    </>
  )
}
