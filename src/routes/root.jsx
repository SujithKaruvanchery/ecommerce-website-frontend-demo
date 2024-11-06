import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function root() {
  return (
    <div>
      <main className="container">
        <header className="header">
          <h1>Header</h1>
          <Link to = "/login">Login</Link>

        </header>
        <Outlet />
        <footer>
          <h1>Footer</h1>
        </footer>
      </main>
    </div>
  );
}

export default root;
