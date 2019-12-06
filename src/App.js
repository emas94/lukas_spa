import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar1 from "./components/Navbar"
import Home from "./components/Home"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Prices from "./components/Prices"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import { BrowserRouter, Switch, Route, Router } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar1 />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/prices" exact component={Prices} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
