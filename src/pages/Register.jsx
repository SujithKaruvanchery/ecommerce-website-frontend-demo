import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <h1>Address</h1>
        <form action="">
          <input type="text" className="input-2" placeholder="Username" />
          <input type="text" className="input-2" placeholder="Email" />
          <input type="text" className="input-2" placeholder="Phone Number" />
          <input type="text" className="input-2" placeholder="Password" />
          <input
            type="text"
            className="input-2"
            placeholder="Confirm password"
          />
          <div className="text-right">

          <p>Agree the terms and conditions</p>
          <input type="checkbox" />
          </div>
          <input type="submit" value="Confirm" className="btn-2" />
        </form>
        <p>
          Already have an account<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
