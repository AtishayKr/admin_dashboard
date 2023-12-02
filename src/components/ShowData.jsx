import React from 'react'
import {DeleteBtn, EditBtn} from './index'

export default function ShowData({name, email, role}) {
  return (
    <tr>
        <td>
            <div className='nameSection'>
                <input type='checkbox' className='select'/> 
                <p>{name}</p>
            </div>
        </td>
        <td>{email}</td>
        <td>{role}</td>
        <td> 
            <div className='actions'>
                <EditBtn />
                <DeleteBtn />
            </div>
        </td>
     </tr>
  )
}
