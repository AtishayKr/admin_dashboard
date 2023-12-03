import React, { useEffect } from 'react'
import {FirstPageBtn, LastPageBtn, NextPageBtn, PageBtn, PrevPageBtn} from './index'
import './Pagination.css'
import { useSelector, useDispatch } from 'react-redux'
import { setPageNumber } from '../features/pages/pageNumberSlice'

export default function Pagination() {

  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => (state.pageNumber.value))
  const usersData = useSelector((state) => (state.users.value))
  const totalPage = Math.ceil(usersData.length / 10);
  // console.log(totalPage);


  let componentsArr = [];
  for(let i=1; i<=totalPage; i++) {
    componentsArr.push(<PageBtn number={i} key={i}/>)
  }
  
  return (
    <>
      <div className='paginationContainer'>
        <div className='rightText'>
          Page {pageNumber} of {totalPage}
        </div>
        {pageNumber == 1 || totalPage == 0 || pageNumber == 0 ? 
          <> <FirstPageBtn disabled/> <PrevPageBtn disabled/> </>
          :<> <FirstPageBtn/> <PrevPageBtn/> </>}
        {componentsArr}
        {totalPage == pageNumber || totalPage == 0 || pageNumber == 0 ? 
        <><NextPageBtn disabled/><LastPageBtn disabled/></> 
        : <><NextPageBtn/><LastPageBtn/></>}
      </div>
    </>
  )
}
