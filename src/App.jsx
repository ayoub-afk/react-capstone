import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './NavigationBar'
import FooterCom from './FooterCom'
import HeaderCom from './HeroCom'
import MainCom from './MainCom'
import BookingCom from './BookingCom'
import AboutCom from './AboutCom'
import FoodCom from './FoodCom'
import ReviewCom from './ReviewCom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <NavigationBar />
        <HeaderCom />

      <FoodCom/>
      <ReviewCom />

       <AboutCom />
       <FooterCom/>

       
    </>
  )
}

export default App
