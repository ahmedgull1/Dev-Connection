import React from 'react'
import { Route, Routes } from 'react-router'
import Allcomponents from './components/Allcomponents'
import Developers from './components/Developers'
import Login from './components/Login'
import Signup from './components/Signup'
import CreateProfile from './components/CreateProfile'
import Profile from './components/Profile'
import EditeProfile from './components/EditeProfile'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Allcomponents />} />
        <Route path="/Signup" element={<Signup />} />0
        <Route path="/login" element={<Login />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/edit_profile" element={<EditeProfile />} />
        <Route path="/edit_profile/:id" element={<EditeProfile />} />

      </Routes>
    </div>
  )
}

export default App