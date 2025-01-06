
import { React, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Register from './pages/register'
import Login from './pages/login'
import BrowserFound from './pages/browseFound'
import BrowserLost from './pages/browseLost'
import RegisterFound from './pages/RegisterFound'
import RegisterLost from './pages/RegisterLost'

import './App.css'

function App() {


  return (
    <>
    <body className=' w-full min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-fixed bg-cover bg-center '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />        
          <Route path='/browse-lost-items' element={<BrowserLost />} />
          <Route path='/register-lost-items' element={<RegisterLost />} />
          <Route path='/browse-found-items' element={<BrowserFound />} />
          <Route path='/register-found-items' element={<RegisterFound />} />
        </Routes>
      </BrowserRouter>
    </body>
      
    </>
  )
}

export default App
