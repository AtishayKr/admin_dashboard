import React, { useEffect, useState } from 'react'
import './Table.css'
import {ShowData} from './index'
import { useDispatch, useSelector } from 'react-redux'
import { toggleChecked } from '../features/users/usersSlice'

export default function Table() {

    const [mainToggle, setMainToggle] =  useState(false);
    const userData = useSelector((state) => (state.users.value));
    const pageNumber = useSelector((state) => (state.pageNumber.value))
    const dispatch = useDispatch();

    const pageData = userData.slice((pageNumber - 1) * 10, ((pageNumber - 1) * 10) + 10);
    // console.log(pageData);

    useEffect(() => {
        // setMainToggle(false);
        let flag = true;
        for(let i=0; i<pageData.length; i++) {
            if(pageData[i].checked == false) {
                flag = false
            }
        }
        if(pageData.length === 0) flag = false
        setMainToggle(flag)
    }, [pageNumber, pageData])

    const checkBoxClickHandle = (e) => {

        console.log(e.target.checked)
        setMainToggle(e.target.checked)

        if(e.target.checked){

            for(let i=0; i<pageData.length; i++) {
                if(pageData[i].checked === false) {
                    dispatch(toggleChecked(pageData[i].id))
                }
            }
        }else{
            console.log("inside false")
            for(let i=0; i<pageData.length; i++) {
                console.log("inside for loop")
                if(pageData[i].checked === true) {
                    dispatch(toggleChecked(pageData[i].id))
                }
            }
        }
        console.log(pageData)
    }

  return (
    <>
        <table>
            <thead>
                    <th width="25%" > 
                        <div className='nameSection'> 
                            {mainToggle ?
                                <input type='checkbox' onChange={checkBoxClickHandle} checked className='select'/> :
                                <input type='checkbox' onChange={checkBoxClickHandle} className='select'/>
                            }
                             
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
                    isChecked = {dataItem.checked}
                    />
                ))}
                
            </tbody>
        </table>
    </>
  )
}
