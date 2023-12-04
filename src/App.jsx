import { useEffect, useState } from 'react';
import { usersApi } from "./api/api";
import './App.css'
import {Footer, Header, Table} from './components'
import { useDispatch} from 'react-redux';
import { addData } from './features/users/usersSlice';

function App() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
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
    { data.length != 0 && console.log(data)}
    {data.length != 0 && dispatch(addData(data))}

  }, [data])

  return (
    <>
      <div className='mainBody'>
        <Header />
        <Table />
        <Footer />
      </div>
    </>
  )
}

export default App
