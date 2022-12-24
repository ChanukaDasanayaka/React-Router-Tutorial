import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {
    const navigate = useNavigate();
  return (
    <div className='container'>
        <h3>
            Order Summary
        </h3>
        <button className='btn btn-primary' onClick={()=> navigate(-1)}> Go back</button>
    </div>
  )
}
