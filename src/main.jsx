// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>   
  </BrowserRouter>,
)
