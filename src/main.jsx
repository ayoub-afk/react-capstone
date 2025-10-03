import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router' ;
import NavigationBar from './NavigationBar.jsx';
import MainCom from './MainCom.jsx';
import HeaderCom from './HeroCom.jsx';
import FooterCom from './FooterCom.jsx';
import BookingCom from './BookingCom.jsx';
import AboutCom from './AboutCom.jsx';
import FoodCom from './FoodCom.jsx';


const router = createBrowserRouter([{
  path : '/' ,
  element : <App/> ,
},{
  path : '/nav' ,
  element : <NavigationBar/> ,
},{
  path : '/main' ,
  element : <MainCom/> ,
},{
  path : '/header' ,
  element : <HeaderCom/> ,
},{
  path : '/footer' ,
  element : <FooterCom/> ,
},{
  path : '/booking' ,
  element : <BookingCom/> ,
},{
  path : '/about' ,
  element : <AboutCom/> ,
},{
  path : '/food' ,
  element : <FoodCom/> ,
}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
