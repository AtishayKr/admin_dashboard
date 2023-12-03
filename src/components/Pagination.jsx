import React from 'react'
import {FirstPageBtn, LastPageBtn, NextPageBtn, PageBtn, PrevPageBtn} from './index'
import './Pagination.css'
import { useSelector } from 'react-redux'

export default function Pagination() {

  const pageNumber = useSelector((state) => (state.pageNumber.value))
  const usersData = useSelector((state) => (state.users.value[1]))
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
        {pageNumber == 1 ? 
          <> <FirstPageBtn disabled/> <PrevPageBtn disabled/> </>
          :<> <FirstPageBtn/> <PrevPageBtn/> </>}
        {componentsArr}
        {totalPage == pageNumber ? 
        <><NextPageBtn disabled/><LastPageBtn disabled/></> 
        : <><NextPageBtn/><LastPageBtn/></>}
      </div>
    </>
  )
}
