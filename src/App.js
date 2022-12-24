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
import { Admin } from './components/users/Admin'
import { UserDetails } from './components/users/UserDetails'
import {Users} from './components/users/Users'

const App = () => {
  return (
    <>
    <Navbar />    
    <Routes>      
      <Route path='/' element={<Home />}/>
      <Route path="about" element={<About/>} />      
      <Route path='order-summary' element={<OrderSummary />} />
      <Route path='*' element={<NoPage/>} />

      <Route path='users' element={<Users />} />
      <Route path='users/:userId' element={<UserDetails/>} />
      <Route path='users/admin' element={<Admin />} />
      

      {/* Nested Routes */}
      <Route path="products" element={<Products/>}>
        <Route path="featured" element={<Featured/>} />
        <Route path="new" element={<New/>} />

        <Route index element={<Featured />} />
      </Route>
    </Routes>
    </>
  )
}

export default App