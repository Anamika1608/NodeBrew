import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import About from './components/About/About.jsx';
import HomePage from './pages/HomePage.jsx';
import BrewBridge from './components/BrewBridge/BrewBridge.jsx';
import HackBrew from './components/HackBrew/HackBrew.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<HomePage/>}/>
    <Route path='Home' element={<HomePage/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Brew-Bridge' element={<BrewBridge/>}/>
    <Route path='Hack-Brew' element={<HackBrew/>}/>
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
