import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h3>Home</h3>
      <button className='btn btn-primary' onClick={()=> navigate('order-summary')}> place order</button>
      
    </div>
  )
}
