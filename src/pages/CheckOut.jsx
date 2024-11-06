import React from 'react'
import { Link } from 'react-router-dom'

function CheckOut() {
  return (
    <div>
      <h1>Address</h1>
      <form action="">
        <input type="text" className='input-2' placeholder='Address-line-1'/>
        <input type="text" className='input-2' placeholder='Address-line-2'/>
        <input type="text" className='input-2' placeholder='City'/>
        <input type="text" className='input-2' placeholder='State'/>
        <input type="text" className='input-2' placeholder='Country'/>
        <input type="text" className='input-2' placeholder='Pincode'/>
        <input type="submit" value="Confirm" className='btn-2' />
        <Link to = "/my-orders" className='btn-2'>Confirm</Link>
      </form>
    </div>
  )
}

export default CheckOut
