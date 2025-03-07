import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tenzis from './Tenzies/Tenzis';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Tenzis/>
  )
}

export default App
