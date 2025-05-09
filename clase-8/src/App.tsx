import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Counter} 
import { AuthProvider } from './assets/contex/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <AuthProvider>
      <>
      <div className="flex flex-col justify-center items-center h-svh w-svm">
        <h1 className='text-4xl mb-5'>Use States</h1>
        <h2 className='font-bold mt-7'>Contador</h2>
      </div>
      <Counter/>
      </>
    </AuthProvider>
  )
}

export default App
