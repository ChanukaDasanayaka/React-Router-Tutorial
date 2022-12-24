import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import { Home } from './components/Home'
import Navbar from './components/Navbar'
import { NoPage } from './components/NoPage'
import OrderSummary from './components/OrderSummary'
import { Products } from './components/Products'
import { Featured } from './components/products/Featured'
import { New } from './components/products/New'

const App = () => {
  return (
    <>
    <Navbar />    
    <Routes>      
      <Route path='/' element={<Home />}/>
      <Route path="about" element={<About/>} />      
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='*' element={<NoPage/>} />

      {/* Nested Routes */}
      <Route path="products" element={<Products/>}>
        <Route path="featured" element={<Featured/>} />
        <Route path="new" element={<New/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App