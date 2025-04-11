import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mapping from './typescript/Mapping'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="justify-items-center w-dvw">
    <Mapping/>
    </div>
  )
}

export default App
