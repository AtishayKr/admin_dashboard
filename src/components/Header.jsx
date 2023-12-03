import React, { useEffect, useState } from 'react'
import './Header.css'
import { DeleteAllIcon } from '../assets'
import { selectedDelete } from '../features/users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const [disable, setDisable] = useState(true)
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.value);


  useEffect(() => {
    setDisable(true)
    for(let i=0; i<userData.length; i++) {
      if(userData[i].checked === true){
        setDisable(false);
      }
    }
  }, [userData])


  const handleClick = () => {
    dispatch(selectedDelete());
  }
  return (
    <div className='header'>
        <div className='searchBox'>
            <input 
            className='searchBar'
            type='text'
            name='searcBox'
            placeholder='Enter value...'/>
        </div>
        <div className={ disable ? 'deleteBtn selectedDeleteBtnDissable' : 'deleteBtn'} onClick={handleClick}>
            <img src={DeleteAllIcon} className="deleteIcon" alt="deleteIcon" />
        </div>
        
    </div>
  )
}

export default Header

