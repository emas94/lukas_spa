import React, { Component } from "react"
import "../style/services.scss"
import logo from "../img/home.jpg"
export class Services extends Component {
  render() {
    return (
      <>
        <div className="services">
          <div className="servBGC"></div>
          <div className="h1">Services</div>
          <div className="line"></div>

          <h1 className="text-center m-3">
            Podnośniki koszowe wynajmujemy do prac związanych z:
          </h1>
          <div className="container">
            <div className="row">
              <div className="col1 col-md-4 mb-4 mt-4  text-center">
                <h1 className="pb-4 mobile">Montażem i konserwacją reklam.</h1>
                <img className="serv1 img-fluid  " src={logo} alt="logo1"></img>
              </div>
              <div className="col1 col-md-8 mb-auto mt-auto  text-center">
                <h1 className="pb-4 desktop">Montażem i konserwacją reklam.</h1>
              </div>
              <hr
                style={{
                  width: "100%",
                  color: "black",
                  height: "1px",
                  backgroundColor: "black"
                }}
              />
              <div className="col1 col-md-8 mb-auto mt-auto  text-center">
                <h1 className="pb-4">Pracami filmowymi i fotograficznymi.</h1>
              </div>
              <div className="col1 col-md-4 mb-4 mt-4  text-center">
                <img className="serv1 img-fluid  " src={logo} alt="logo1"></img>
              </div>
              <hr
                style={{
                  width: "100%",
                  color: "black",
                  height: "1px",
                  backgroundColor: "black"
                }}
              />

              <div className="col1 col-md-4 mb-4 mt-4 text-center">
                <h1 className="pb-4 mobile">Pielęgnacją oraz wycinką drzew.</h1>
                <img className="serv1 img-fluid  " src={logo} alt="logo1"></img>
              </div>
              <div className="col1 col-md-8 mb-auto mt-auto  text-center">
                <h1 className="pb-4 desktop">
                  Pielęgnacją oraz wycinką drzew.
                </h1>
              </div>
              <hr
                style={{
                  width: "100%",
                  color: "black",
                  height: "1px",
                  backgroundColor: "black"
                }}
              />

              <div className="col1 col-md-8 mb-auto mt-auto ` text-center">
                <h1 className="pb-4"> Myciem okien i elewacji.</h1>
              </div>
              <div className="col1 col-md-4 mb-4 text-center mt-4 ">
                <img className="serv1 img-fluid  " src={logo} alt="logo1"></img>
              </div>
              <hr
                style={{
                  width: "100%",
                  color: "black",
                  height: "1px",
                  backgroundColor: "black"
                }}
              />
              <div className="col1 col-md-4 mb-4 mt-4 text-center">
                <h1 className="pb-4 mobile">
                  Konserwacją oświetlenia i sieci energetycznych.
                </h1>
                <img className="serv1 img-fluid  " src={logo} alt="logo1"></img>
              </div>
              <div className="col1 col-md-8 mb-auto mt-auto  text-center">
                <h1 className="pb-4 desktop">
                  Konserwacją oświetlenia i sieci energetycznych.
                </h1>
              </div>
              <hr
                style={{
                  width: "100%",
                  color: "black",
                  height: "1px",
                  backgroundColor: "black"
                }}
              />
              <div className="col1 col-md-8 mb-auto mt-auto ` text-center">
                <h1 className="pb-4">
                  {" "}
                  Ocieplaniem budynków i innych obiektów
                </h1>
              </div>
              <div className="col1 col-md-4 mb-4 text-center mt-4 ">
                <img className="serv1 img-fluid  " src={logo} alt="logo1"></img>
              </div>
              <hr
                style={{
                  width: "100%",
                  color: "black",
                  height: "1px",
                  backgroundColor: "black"
                }}
              />
              <div className="col1 col-md-4 mb-4 text-center mt-4 ">
                <h1 className="pb-4 mobile">
                  Pracami blacharsko – dekarskimi.
                </h1>
                <img className="serv1 img-fluid  " src={logo} alt="logo1"></img>
              </div>
              <div className="col1 col-md-8 mb-auto mt-auto  text-center">
                <h1 className="pb-4 desktop">
                  Pracami blacharsko – dekarskimi.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Services
