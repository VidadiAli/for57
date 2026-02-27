import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/LoginAdmin/Login'
import RegisterAdmin from './Component/LoginAdmin/RegisterAdmin'
import AdminPanel from './Component/AdminPanel/AdminPanel'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin-panel' element={<AdminPanel />} />
        <Route path='/admin-login' element={<Login />} />
        <Route path='/admin-register' element={<RegisterAdmin />} />
      </Routes>
    </div>
  )
}

export default App