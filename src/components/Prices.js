import React, { Component } from "react"
import $ from "jquery"
import "../style/prices.css"
import merc_w from "../img/cars/merc_w.jpg"
import merc_b from "../img/cars/merc_b.jpg"
import merc_y from "../img/cars/merc_y.jpg"
import man from "../img/cars/man.jpg"

// MDB Lightbox Init
var Modal = require("react-bootstrap-modal")
export default class Prices extends Component {
  componentDidMount() {
    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
      event.preventDefault()
      $(this).ekkoLightbox()
    })
  }
  render() {
    return (
      <div className="price">
        <div className="h1">Price List</div>
        <div className="line"></div>
        <h1 className="text-center mt-4">
          Nasza firma dysponuje następującymi podnośnikami koszowymi:
        </h1>
        <div></div>
        <div className="container mt-4">
          <div className="row mt-auto mb-auto">
            <div className="col-md-3 mt-auto mb-auto">
              <div className="card mb-4">
                <div className="card-header text-center">Nissan</div>
                <div className="man mt-4"></div>
                <div className="priceOffert ml-auto mr-auto">
                  <span>5$</span>
                  <div>
                    <p>dzień</p>
                    <p>350$ miesiąc.</p>
                  </div>
                </div>
                <hr className="mt-0"></hr>
                <ul className="ml-auto mr-auto">
                  <li>Zasięg 25 metrów</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
                <hr className="mb-0 mt-2"></hr>

                <div className="btn">
                  <button
                    className="btn btn-primary m-3"
                    data-toggle="modal"
                    data-target="#auto1"
                  >
                    Dowiedz się wiecej
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="auto1"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog   modal-lg" role="document">
                <div className="modal-content mt-auto mb-auto">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Ford
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h1 className="text-center mt-4">Tu coś o aucie nr 1</h1>
                    <hr
                      style={{
                        width: "80%",
                        color: "black",
                        height: "1px",
                        backgroundColor: "black"
                      }}
                      className="ml-auto mr-auto mb-4"
                    />
                    <img
                      className="img-fluid ml-auto mr-auto"
                      src={man}
                      alt=""
                    ></img>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia tempore dignissimos consequuntur reprehenderit
                      iure aut hic possimus molestiae rem eius autem corrupti,
                      dolorem placeat! Suscipit ipsum, sequi non incidunt
                      molestias saepe aperiam quaerat repellendus maiores
                      tempore reprehenderit nesciunt sint consectetur animi,
                      odit voluptatem aliquid officiis nisi neque doloremque
                      deserunt in dignissimos doloribus quos. Cum, tenetur
                      magni.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Zamknij
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-auto mb-auto">
              <div className="card mb-4">
                <div className="card-header text-center">Mercedes</div>
                <div className="merc_b mt-4"></div>
                <div className="priceOffert ml-auto mr-auto">
                  <span>5$</span>
                  <div>
                    <p>dzień</p>
                    <p>350$ miesiąc.</p>
                  </div>
                </div>
                <hr className="mt-0"></hr>
                <ul className="ml-auto mr-auto">
                  <li>Zasięg 25 metrów</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
                <hr className="mb-0 mt-2"></hr>

                <div className="btn">
                  <button
                    className="btn btn-primary m-3"
                    data-toggle="modal"
                    data-target="#auto2"
                  >
                    Dowiedz się wiecej
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Modal 2--> */}
            <div
              className="modal fade"
              id="auto2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog  modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Nissan
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h1 className="text-center">Tu coś o aucie nr 2</h1>
                    <hr
                      style={{
                        width: "80%",
                        color: "black",
                        height: "1px",
                        backgroundColor: "black"
                      }}
                      className="ml-auto mr-auto mb-4"
                    />
                    <img
                      className="img-fluid ml-auto mr-auto"
                      src={merc_b}
                      alt=""
                    ></img>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia tempore dignissimos consequuntur reprehenderit
                      iure aut hic possimus molestiae rem eius autem corrupti,
                      dolorem placeat! Suscipit ipsum, sequi non incidunt
                      molestias saepe aperiam quaerat repellendus maiores
                      tempore reprehenderit nesciunt sint consectetur animi,
                      odit voluptatem aliquid officiis nisi neque doloremque
                      deserunt in dignissimos doloribus quos. Cum, tenetur
                      magni.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Zamknij
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-auto mb-auto">
              <div className="card mb-4">
                <div className="card-header text-center">Mercedes</div>
                <div className="merc_w mt-4"></div>
                <div className="priceOffert ml-auto mr-auto">
                  <span>5$</span>
                  <div>
                    <p>dzień</p>
                    <p>350$ miesiąc.</p>
                  </div>
                </div>
                <hr className="mt-0"></hr>
                <ul className="ml-auto mr-auto">
                  <li>Zasięg 25 metrów</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
                <hr className="mb-0 mt-2"></hr>

                <div className="btn">
                  <button
                    className="btn btn-primary m-3"
                    data-toggle="modal"
                    data-target="#auto3"
                  >
                    Dowiedz się wiecej
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Modal 3--> */}
            <div
              className="modal fade"
              id="auto3"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog  modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      BMW
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h1 className="text-center">Tu coś o aucie nr 3</h1>
                    <hr
                      style={{
                        width: "80%",
                        color: "black",
                        height: "1px",
                        backgroundColor: "black"
                      }}
                      className="ml-auto mr-auto mb-4"
                    />
                    <img
                      className="img-fluid ml-auto mr-auto"
                      src={merc_w}
                      alt=""
                    ></img>
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia tempore dignissimos consequuntur reprehenderit
                      iure aut hic possimus molestiae rem eius autem corrupti,
                      dolorem placeat! Suscipit ipsum, sequi non incidunt
                      molestias saepe aperiam quaerat repellendus maiores
                      tempore reprehenderit nesciunt sint consectetur animi,
                      odit voluptatem aliquid officiis nisi neque doloremque
                      deserunt in dignissimos doloribus quos. Cum, tenetur
                      magni.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Zamknij
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-auto mb-auto">
              <div className="card mb-4">
                <div className="card-header text-center">Mercedes</div>
                <div className="merc_y mt-4"></div>
                {/* <img
                  src={merc_y}
                  className="img-fluid ml-auto mr-auto mt-4 mb-auto"
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                ></img> */}
                <div className="priceOffert ml-auto mr-auto">
                  <span>5$</span>
                  <div>
                    <p>dzień</p>
                    <p>350$ miesiąc.</p>
                  </div>
                </div>
                <hr className="mt-0"></hr>
                <ul className="ml-auto mr-auto">
                  <li>Zasięg 25 metrów</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
                <hr className="mb-0 mt-2"></hr>

                <div className="btn">
                  <button
                    className="btn btn-primary m-3"
                    data-toggle="modal"
                    data-target="#auto4"
                  >
                    Dowiedz się wiecej
                  </button>
                </div>

                {/* <!-- Modal 4--> */}
                <div
                  className="modal fade"
                  id="auto4"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content m-auto mt-4">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Audi
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h1 className="text-center">Tu coś o aucie nr 4</h1>
                        <hr
                          style={{
                            width: "80%",
                            color: "black",
                            height: "1px",
                            backgroundColor: "black"
                          }}
                          className="ml-auto mr-auto mb-4"
                        />
                        <img
                          className="img ml-auto mr-auto"
                          src={merc_y}
                          alt=""
                        ></img>
                        <p className="text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Mollitia tempore dignissimos consequuntur
                          reprehenderit iure aut hic possimus molestiae rem eius
                          autem corrupti, dolorem placeat! Suscipit ipsum, sequi
                          non incidunt molestias saepe aperiam quaerat
                          repellendus maiores tempore reprehenderit nesciunt
                          sint consectetur animi, odit voluptatem aliquid
                          officiis nisi neque doloremque deserunt in dignissimos
                          doloribus quos. Cum, tenetur magni.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Zamknij
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
