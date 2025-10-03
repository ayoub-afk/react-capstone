import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './NavigationBar'
import FooterCom from './FooterCom'
import HeaderCom from './HeaderCom'
import MainCom from './MainCom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>
          React Capstone App
       </h1>
       <h3>
          Here i am adding another line but from another device !
       </h3>
       <NavigationBar />
        <HeaderCom />
        <MainCom />
       <FooterCom/>
    </>
  )
}

export default App
