import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import LoginPage from './pages/loginPage'
import ProfilePage from './pages/ProfilePage'
import SignUpPage from './pages/SignUpPage'
import { axiosInstance } from './lib/axios'
import { useAuthStore } from './store/useAuthStore'

const App = () => {
  const {authUser} = useAuthStore

  
  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/settings" element={<SettingsPage />}/>

      </Routes> 

    </div>
    
  )
}

export default App
