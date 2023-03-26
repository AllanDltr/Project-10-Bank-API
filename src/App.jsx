import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import {Header} from './components/Header/Header.jsx'
import {Footer} from './components/Footer/Footer.jsx'
import {Home} from './pages/Home/Home.jsx'
import {Login} from './pages/Login/Login.jsx'
import {Profile} from './pages/Profile/Profile.jsx'
import {loadData}  from '../src/services/LocalStorage'
import {EditProfile} from './pages/EditProfile/EditProfile.jsx'
import './App.css'

export const App = () => {
  const[tokenInLocalStorage, setTokenInLocalStorage] = useState()

  useEffect(() => {
    const auth = loadData("authToken")
    if (!auth) {
      setTokenInLocalStorage(false)
    } else {
      setTokenInLocalStorage(true)
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home tokenExists={tokenInLocalStorage}/>} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="profile/edit" element={<EditProfile />} />
      </Routes>
      <Footer />
    </div>
  )}