import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Teams from '../pages/Teams'

const AppRouter = () => {
  return (
      <BrowserRouter >
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/About/' element={<About/>} />
              <Route path='/Contact/' element={<Contact />} />
              <Route path='/Product/' element={< Products />} />
              <Route path='/Teams/' element={< Teams />} />
              {/* <Route path='/' element={< Home/>} />
              <Route path='/' element={< Home/>} />
              <Route path='/' element={< Home/>} />
              <Route path='/' element={< Home/>} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter