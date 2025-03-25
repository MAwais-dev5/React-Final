
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Lightdown from './components/Lightdown'
import Clock from './components/Clock'

function App() { 
  return (
    <>
      <div className='App'>
        <Lightdown />
        <Clock/>
        
        </div>
     </>
  )
}

export default App



