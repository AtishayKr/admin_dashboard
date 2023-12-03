import React from 'react'
import {DeleteBtn, EditBtn} from './index'
import { useSelector, useDispatch } from 'react-redux'
import {deleteData, updateData} from '../features/users/usersSlice'

export default function ShowData({id, name, email, role}) {

    const dispatch = useDispatch();
    const editBtnHandler = () => {

    }
    const deleteBtnHandler = () => {
        console.log("delete Clicked")
        dispatch(deleteData(id));
    }

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
                <EditBtn onClick={editBtnHandler}/>
                <DeleteBtn onClick={deleteBtnHandler} />
            </div>
        </td>
     </tr>
  )
}
