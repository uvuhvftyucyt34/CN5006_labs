import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './Myapp.jsx'
import Product from './Product.jsx'
import DiscountCalculator from './DiscountCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome name = "CN5006"/>
    <Product productName = "Laptop" price = {800}/>
    <br /><br />
    <DiscountCalculator productName = "Memory" price = {2000}/>
  </StrictMode>,
)