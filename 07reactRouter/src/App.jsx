import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'

function App() {

  return (
    <>
  <Header />
  <Footer />
  <About />
  <Home />
    </>
  )
}

export default App
