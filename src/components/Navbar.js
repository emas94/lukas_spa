import React, { Component } from "react"
import { Link, BrowserRouter, NavLink } from "react-router-dom"
import "../style/navbar.scss"
// const possitionFixef = () => {
//   // const divTop = document.querySelector(".topDiv").clientHeight
//   const scrollSize = window.scrollY
//   const nav = document.querySelector("nav")
//   if (scrollSize > 0) {
//     nav.classList.add("sticky")
//   } else {
//     nav.classList.remove("sticky")
//   }
// }
// window.addEventListener("scroll", possitionFixef)
export class Navbar extends Component {
  render() {
    return (
      <>
        {" "}
        <nav className="navbar navbar-expand-sm navbar-light ">
          <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
            <Link className="navbar-brand mr-4" to="/">
              Michalski Company
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample11"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-center"
              id="navbarsExample11"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact className="nav-link home" to="/">
                    Strona Główna
                  </NavLink>
                </li>{" "}
                <li className="nav-item">
                  <NavLink exact to="/services" className="nav-link services">
                    Usługi
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link price" to="prices">
                    Cennik
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link about " to="about">
                    O firmie
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link gallery" to="gallery">
                    Galeria
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link contact" to="contact">
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
