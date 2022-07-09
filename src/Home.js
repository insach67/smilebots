import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './componet/Nav'
import Contact from './Pages/Contact'
import Favourite from './Pages/Favourite'
import Order from './Pages/Order'

const Home = () => {
  return (
    <div>
        <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/' element = {<Contact />} />
        <Route path='/' element = {<Favourite />} />
        <Route path='/' element = {<Order />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home