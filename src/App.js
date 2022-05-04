import React from 'react'


//react router dom v6
//BrowserRouter contains components which use links
//Routes allows us to only load one component at a time
//Route specifies a route and attached to a component
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import components
import NavbarPage from './components/NavbarPage'
import LandingPage from './components/LandingPage'
import MovieIndex from './components/MovieIndex'





const App = () => {

  return (
    <BrowserRouter>
    {/* NAV */}
      <NavbarPage />
      
      <Routes>
        {/* landing page */}
        <Route path='/' element={<LandingPage />} />
        {/* movie index */}
        <Route path='/movies' element={<MovieIndex />} />
        
        
      </Routes>
    </BrowserRouter>

  )
}

export default App
