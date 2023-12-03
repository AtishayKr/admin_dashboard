import React, { useEffect, useState } from 'react'
import './Table.css'
import {ShowData} from './index'
import { useSelector } from 'react-redux'

export default function Table() {

    const userData = useSelector((state) => (state.users.value));
    const pageNumber = useSelector((state) => (state.pageNumber.value))

    const pageData = userData.slice((pageNumber - 1) * 10, ((pageNumber - 1) * 10) + 10);
    console.log(pageData);

  return (
    <>
        <table>
            <thead>
                    <th width="25%" > 
                        <div className='nameSection'> 
                            <input type='checkbox' className='select'/> 
                            <p>Name</p> 
                        </div>
                    </th>
                    <th width="35%" >Email</th>
                    <th width="20%" >Role</th>
                    <th width="25%" >Actions</th>
            </thead>
            <tbody>
                

                {pageData && pageData.map((dataItem) => (
                    <ShowData 
                    key={dataItem.id} 
                    id = {dataItem.id}
                    name = {dataItem.name}
                    email = {dataItem.email}
                    role = {dataItem.role}
                    />
                ))}
                
            </tbody>
        </table>
    </>
  )
}
