import './App.css'
import { useState } from 'react'
import {Footer, Header, Table} from './components'

function App() {
  return (
    <div className='mainBody'>
      <Header />
      <Table />
      <Footer />
    </div>
  )
}

export default App
