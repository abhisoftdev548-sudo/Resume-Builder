import React from 'react'
import Resume from './components/Resume'
import Home from './components/Home'
import BuildResume from './components/BuildResume'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buildresume' element={<BuildResume/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
