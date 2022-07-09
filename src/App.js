import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Navigation from './componet/Navigation'
import CardDetailsPage from './Pages/CardDetailsPage'
import Contact from './Pages/Contact'
import Favourite from './Pages/Favourite'
import Homes from './Pages/Homes'
import Order from './Pages/Order'
import Profile from './Pages/Profile'

import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element = {<Homes /> } />
        <Route path='/Home' element = {<Homes /> } />
        <Route path='/contact' element = {<Contact /> } />
        <Route path='/favourite' element = {<Favourite /> } />
        <Route path='/order' element = {<Order /> } />
        <Route path='/profile' element = {<Profile /> } />
        <Route path=':category/:id' element = {<CardDetailsPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App