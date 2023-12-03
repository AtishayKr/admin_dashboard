import './App.css'
import {Footer, Header, Table} from './components'
import useUsersInfo from './hooks/useUsersInfo'
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './features/users/usersSlice';

function App() {
  
  // store data in redux
  const data = useUsersInfo();
  const dispatch = useDispatch();
  dispatch(addData(data));

  const isData = useSelector((state) => state.users.value[1])

  return (
    <>
      {isData &&
      <div className='mainBody'>
        <Header />
        <Table />
        <Footer />
      </div>}
    </>
  )
}

export default App
