import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>
        React Capstone App
       </h1>
       <h3>
        Here i am adding another line but from another device !
       </h3>
      </div>
    </>
  )
}

export default App
