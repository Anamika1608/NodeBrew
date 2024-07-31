import { NavbarDemo } from './components/Navbar/Navbar'
import './App.css' 

import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <NavbarDemo/>
      <Outlet/>
    </>
  )
}

export default App
