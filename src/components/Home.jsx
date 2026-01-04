import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  return (
    <div className='h-screen w-screen bg-black'>
      <div className='py-4 w-full text-6xl font-semibold text-white bg-blue-800 text-center'>
        Resume Builder
      </div>
      <div className='h-full flex justify-center items-center'>

        <button className='bg-blue-800 py-5 px-6 rounded-2xl text-white text-5xl' onClick={()=>{navigate('/buildresume')}}>Build Your Resume</button>
      </div>
      
    </div>
  )
}

export default Home
