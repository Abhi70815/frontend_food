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

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app min-h-screen flex flex-col'>
        <Navbar setShowLogin={setShowLogin} />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route 
              path='/admin' 
              element={
                <div className="w-full h-full min-h-[80vh]">
                  <iframe 
                    src="https://admin-food.onrender.com/list" 
                    title="Admin Panel"
                    frameBorder="0" 
                    width="100%" 
                    height="100%" 
                    className="min-h-[80vh] w-full"
                    style={{ minHeight: '80vh', border: 'none' }}
                  ></iframe>
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App

