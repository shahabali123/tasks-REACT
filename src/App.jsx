import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import User from './components/User'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    // <BrowserRouter>
    <>
      <Header />
      
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:id' element={<User />}/>
      </Routes>
      
      <Footer />
      </>
    {/* </BrowserRouter> */}
  )
}

export default App
