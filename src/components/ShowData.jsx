import React, { useState } from 'react'
import {DeleteBtn, EditBtn, SaveBtn} from './index'
import {useDispatch, useSelector } from 'react-redux'
import {deleteData, updateData, toggleChecked} from '../features/users/usersSlice'
import './showData.css'

export default function ShowData({id, name, email, role, isChecked}) {
    console.log(`is checked ${isChecked}`)
    const [isEditable, setIsEditable] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [newRole, setNewRole] = useState(role);

    const dispatch = useDispatch();
    const data = useSelector((state) => state.users.value)

    const editBtnHandler = () => {
        setIsEditable(true)
    }

    const saveBtnHandler = () => {
        setIsEditable(false)
        // console.log(newName)
        dispatch(updateData({id, newName, newEmail, newRole}))
    }
    const deleteBtnHandler = () => {
        dispatch(deleteData(id))
    }
    const checkedBtnHandler = () => {
        dispatch(toggleChecked(id))
        // console.log("clicked")
    }

  return (
    <tr className={isChecked ? 'changeBackGround' : ''}>
        <td>
            <div className='nameSection'>
                {/* {isChecked ? 
                    <input type='checkbox' onClick={checkedBtnHandler} checked className='select'/> :
                    <input type='checkbox' onClick={checkedBtnHandler} className='select'/>
                    
                } */}
                {isChecked && <input type='checkbox' onClick={checkedBtnHandler} checked className='select'/>}
                {!isChecked && <input type='checkbox' onClick={checkedBtnHandler} className='select'/>}
                
                {!isEditable ? 
                    <input  
                    type="text" 
                    name="name" 
                    id='name' 
                    value={newName}
                    readOnly
                    style={{borderColor: 'transparent', backgroundColor: 'transparent'}}
                    /> : 
                    <input  
                    type="text" 
                    name="name"  
                    value={newName}
                    onChange={(e) => (setNewName(e.target.value))}
                    />
                }
                
            </div>
        </td>
        <td>
            {!isEditable ? 
                <input  
                type="text" 
                name="name" 
                id='name' 
                value={newEmail} 
                readOnly 
                style={{borderColor: 'transparent', backgroundColor: 'transparent'}}
                /> : 
                <input  
                type="text" 
                name="name" 
                value={newEmail} 
                onChange={(e) => (setNewEmail(e.target.value))}
                />
            }
            
        </td>
        <td>
            {!isEditable ? 
                <input  
                type="text" 
                name="name" 
                id='name' 
                value={newRole} 
                readOnly 
                style={{borderColor: 'transparent' , backgroundColor: 'transparent'}}
                /> : 
                <input  
                type="text" 
                name="name" 
                value={newRole} 
                onChange={(e) => (setNewRole(e.target.value))}
                />
            }
            
        </td>
        <td> 
            <div className='actions'>
                {isEditable ? 
                    <SaveBtn onClick={saveBtnHandler}/> : 
                    <EditBtn onClick={editBtnHandler}/>  
                }
                
                <DeleteBtn onClick={deleteBtnHandler} />
            </div>
        </td>
     </tr>
  )
}
