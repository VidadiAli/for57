import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './Component/Register/Register'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App