import React from 'react'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Food from './Component/Food/Food'
import Navv from './Component/Navv/Navv'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navv />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Food' element={<Food/>} />
    </Routes>      
    </div>
  )
}

export default App
