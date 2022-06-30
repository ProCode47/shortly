import React from "react";
import logo from '../images/logo.svg'

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <span class="nav_left">
            <a href="index.html">
              {" "}
              <img src={logo} alt="logo" />{" "}
            </a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </span>

          <span class="nav_right">
            <a href="#">Login</a>
            <a class="signup" href="#">
              {" "}
              Sign Up
            </a>
          </span>
          <i class="fas fa-bars bars-sm"></i>
        </nav>
      </header>
    </>
  );
}
