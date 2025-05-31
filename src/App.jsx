import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  //setting login show

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
       <Route path='/admin' element={<iframe src="https://admin-food.onrender.com/list" frameBorder="0" width="100%" height="100%"></iframe>}/>

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
