import React from 'react'
import {FirstPageBtn, LastPageBtn, NextPageBtn, PageBtn, PrevPageBtn} from './index'
import './Pagination.css'

export default function Pagination() {
  return (
    <>
      <div className='paginationContainer'>
        <div className='rightText'>
          Page 1 of 5
        </div>
        <FirstPageBtn/>
        <PrevPageBtn/>
        <PageBtn number={1}/>
        <PageBtn number={2}/>
        <PageBtn number={3}/>
        <PageBtn number={4}/>
        <PageBtn number={5}/>
        <NextPageBtn/>
        <LastPageBtn/>
      </div>
    </>
  )
}
