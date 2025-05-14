import React from 'react'
import Login from './components/user-module/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './components/user-module/Home'
import SignUp from './components/user-module/SignUp'

const App = () => {
  return (
    <div>
      {/* <Login/> */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>

      </Routes>
    </div>
  )
}

export default App