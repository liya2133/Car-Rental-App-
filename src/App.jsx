import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCars from './components/addCars'
import ViewCars from './components/ViewCars'
import Nav from './components/Nav'
import Home from './components/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddCars/>}/>
        <Route path='/view' element={<ViewCars/>}/>

     </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
