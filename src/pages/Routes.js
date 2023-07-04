import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Header from '../components/Header';
import Home from './Home'
import Footer from '../components/Footer';
import About from './About'
import Contact from './Contact'
import Form from '../pages/Form'
import Login from './Login'

export default function customRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
             <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Form' element={<Form />} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

