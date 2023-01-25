import React from "react"
import { Link } from "react-router-dom"
import { AiFillGithub } from "react-icons/ai"

const Navbar = () => {
  return (
    <nav>
      <div className="container navbar">
        <Link to={"/"} className="logo">
          <AiFillGithub className="logo-icon" /> Github Finder
        </Link>
        <div className="nav-items">
          <Link to={"/"} className="nav-item">
            Home
          </Link>
          <Link to={"/about"} className="nav-item">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
