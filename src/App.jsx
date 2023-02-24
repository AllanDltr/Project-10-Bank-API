import React, { useEffect, useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Hero } from './pages/Home/Home.jsx'
import { Features } from './components/Features/Features.jsx';
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { FetchData  } from '../src/services/FetchData'
import { loadData } from '../src/services/LocalStorage'
import { EditProfile } from './pages/EditProfile/EditProfile.jsx'

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
            <Route path="/" element={<Hero tokenExists={tokenInLocalStorage}/>} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="profile/edit" element={<EditProfile />} />
        </Routes>
    <Footer />
    </div>
  )
}