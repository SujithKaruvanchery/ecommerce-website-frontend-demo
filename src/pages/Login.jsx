import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <h1>Address</h1>
        <form action="">
          <input type="text" className="input-2" placeholder="Email" />
          <input type="text" className="input-2" placeholder="Password" />
          <input type="submit" value="Confirm" className="btn-2" />
        </form>
        <p>Create an account<Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
