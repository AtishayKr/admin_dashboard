import React, { useState } from 'react'
import {DeleteBtn, EditBtn, SaveBtn} from './index'
import {useDispatch } from 'react-redux'
import {deleteData, updateData} from '../features/users/usersSlice'
import './showData.css'

export default function ShowData({id, name, email, role}) {
    const [isEditable, setIsEditable] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [newRole, setNewRole] = useState(role);

    const dispatch = useDispatch();

    const editBtnHandler = () => {
        setIsEditable(true)
    }

    const saveBtnHandler = () => {
        setIsEditable(false);
        console.log(newName);
        dispatch(updateData({id, newName, newEmail, newRole}))
    }
    const deleteBtnHandler = () => {
        dispatch(deleteData(id));
    }

  return (
    <tr>
        <td>
            <div className='nameSection'>
                <input type='checkbox' className='select'/> 
                {!isEditable ? 
                    <input  
                    type="text" 
                    name="name" 
                    id='name' 
                    value={newName}
                    readOnly
                    style={{borderColor: 'transparent'}}
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
                style={{borderColor: 'transparent'}}
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
                style={{borderColor: 'transparent'}}
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
