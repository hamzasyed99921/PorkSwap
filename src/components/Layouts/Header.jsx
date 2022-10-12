import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar  fixed-top navbar-expand-lg " id="header">
          <div className="container ">
            <Link className=" navbar-brand text-white " to="/">
              <img
                src="assets/images/logo.png"
                alt=""
                
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon  " />
            </button>
            <div
              className="collapse navbar-collapse text-center  "
              id="navbarScroll"
            >
              <ul className="navbar-nav d-flex justify-content-end  my-lg-0 navbar-nav-scroll  ">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    aria-current="page"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="#">
                    Litepaper
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="#">
                    Platform
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="#">
                    Roadmap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="#">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="#">
                    Audit Report
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header