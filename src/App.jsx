import { useState } from 'react';
import './App.css'
import {Footer, Header, Table} from './components'
import useUsersInfo from './hooks/useUsersInfo'

function App() {
  
  const data = useUsersInfo();

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
