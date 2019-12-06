import React, { Component } from "react"
import $ from "jquery"
import "../style/gallery.scss"
import merc_w from "../img/cars/merc_w.jpg"
import merc_b from "../img/cars/merc_b.jpg"
import merc_y from "../img/cars/merc_y.jpg"
import man from "../img/cars/man.jpg"

export default class Gallery extends Component {
  componentDidMount() {
    $(function() {
      var selectedClass = ""
      $(".filter").click(function() {
        selectedClass = $(this).attr("data-rel")
        $("#gallery").fadeTo(100, 0.1)
        $("#gallery div")
          .not("." + selectedClass)
          .fadeOut()
          .removeClass("animation")
        setTimeout(function() {
          $("." + selectedClass)
            .fadeIn()
            .addClass("animation")
          $("#gallery").fadeTo(300, 1)
        }, 300)
      })
    })
  }
  render() {
    return (
      <>
        {/* <!-- Grid row --> */}
        <div className="row btns">
          {/* <!-- Grid column --> */}
          <div className="col-md-12 d-flex justify-content-center mb-5 fw">
            <button
              type="button"
              className="btn btn-outline-dark waves-effect filter"
              data-rel="all"
            >
              Wszystkie
            </button>
            <button
              type="button"
              className="btn btn-outline-dark waves-effect filter"
              data-rel="0"
            >
              MAN
            </button>
            <button
              type="button"
              className="btn btn-outline-dark waves-effect filter"
              data-rel="1"
            >
              Mercedes 1
            </button>
            <button
              type="button"
              className="btn btn-outline-dark waves-effect filter"
              data-rel="2"
            >
              Mercedes 2
            </button>
            <button
              type="button"
              className="btn btn-outline-dark waves-effect filter"
              data-rel="3"
            >
              Mercedes 3
            </button>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}

        {/* <!-- Grid row --> */}
        <div
          className="gallery ml-auto mr-auto"
          id="gallery"
          style={{ maxWidth: "1600px" }}
        >
          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 0">
            <img className="img-fluid" src={man} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 1">
            <img className="img-fluid" src={merc_y} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 3">
            <img className="img-fluid" src={merc_w} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 2">
            <img className="img-fluid" src={merc_b} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 3">
            <img className="img-fluid" src={merc_w} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 0">
            <img className="img-fluid" src={man} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}
          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 0">
            <img className="img-fluid" src={man} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 1">
            <img className="img-fluid" src={merc_y} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 3">
            <img className="img-fluid" src={merc_w} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 2">
            <img className="img-fluid" src={merc_b} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 3">
            <img className="img-fluid" src={merc_w} alt="Card image cap" />
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="mb-3 pics animation all 0">
            <img className="img-fluid" src={man} alt="Card image cap" />
          </div>
        </div>
        {/* <!-- Grid row --> */}
      </>
    )
  }
}
