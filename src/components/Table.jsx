import React from 'react'
import './Table.css'
import {DeleteBtn, EditBtn} from './index'
import {ShowData} from './index'
import {data} from '../assets/dummyData'

export default function Table() {
    
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
                

                {data.map((dataItem) => (
                    <ShowData 
                    key={dataItem.id} 
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
