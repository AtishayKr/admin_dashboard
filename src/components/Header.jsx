import React, { useEffect, useState } from 'react'
import './Header.css'
import { DeleteAllIcon } from '../assets'
import { selectedDelete } from '../features/users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../features/users/usersSlice';
import { usersApi } from "../api/api";

function Header() {
  const [disable, setDisable] = useState(true)
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.value);

  const [data, setData] = useState([]);
  const uri = usersApi
  useEffect(() => {
    try {
      fetch(uri)
      .then( (res) => res.json())
      .then((res) => 
          // dispatch(addData(res))
          setData(res)
      )
    } catch (error) {
      console.log(error)
    }

  }, [])

  useEffect(() => {

    {data.length != 0 && data.map((dataItem) => dataItem.checked = Boolean(false))}
    // { data.length != 0 && console.log(data)}

  }, [data])


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

  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(userData)

  const handleInputChange = (e) => {

    const searchTerm = e.target.value
    // console.log(searchTerm)
    setSearchItem(searchTerm)

    const filteredItems = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // console.log(filteredItems)
    // console.log(`data -> ${data}`)
    dispatch(addData(filteredItems))
  }
  return (
    <div className='header'>
        <div className='searchBox'>
            <input 
            onChange={handleInputChange}
            value={searchItem}
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

