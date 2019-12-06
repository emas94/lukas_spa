import React, { Component } from "react"
import img from "../img/home.jpg"
import "../style/about.scss"
export default class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="aboutBGC"></div>

          <div className="h1">About us</div>
          <div className="line"></div>
          {/* <!-- Wersja na desktop --> */}
          <div className="container  desktop">
            <div className="row text-center">
              <div className="col md-2 mt-auto mb-auto">
                <img
                  src={img}
                  className="img-fluid"
                  alt=""
                  style={{ height: "350px", width: "350px" }}
                ></img>
              </div>
              <div className="col md-8">
                <h1>Lorem, ipsum dolor.</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium aperiam, vitae asperiores tenetur omnis quae! Odio
                  illum mollitia rem quo!
                </p>
                <h1 className="text-center">
                  Zakres działalności naszej firmy to m.in:
                </h1>
                <p className="text-center" style={{ fontWeight: "bold" }}>
                  Namysłów, Oleśnica, Strzelin, Strzelce Opolskie,
                  Kędzierzyn-Koźle, Opole, Ząbkowice Śl., Kluczbork, Ostrów
                  Wlkp., Krapkowice, Oława, Głubczyce, Prudnik, Olesno,
                  Ostrzeszów, Kłodzko, Kępno, Brzeg, Nysa
                </p>
              </div>
              <div className="col md-2 mt-auto mb-auto">
                <h1 className="mt-4 text-center">Lorem ipsum dolor sit.</h1>
                <ul
                  className="ml-auto mr-auto mt-4 text-center"
                  style={{ listStyleType: "none" }}
                >
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Wersja na mobile --> */}
          <div className="container mt-4 mobile" style={{ maxWidth: "500px" }}>
            <div className="row">
              <div className="col-md-4">
                <h1 className="text-center mt-4">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  atque adipisci, suscipit maiores reiciendis omnis dolor,
                  perferendis et deserunt tempora, sequi veniam cupiditate!
                </p>
              </div>
              <div className="col-md-4">
                <h1 className="text-center">Lorem ipsum dolor sit amet.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  ipsa natus aut hic pariatur veniam tempora enim eveniet.
                  Exercitationem quam ea recusandae fuga accusamus. Explicabo.
                </p>
              </div>
              <div className="col-md-6 ml-auto mr-auto">
                <h1 className="mt-4 text-center">
                  Zakres działalności naszej firmy
                </h1>

                <p className="text-center" style={{ fontWeight: "bold" }}>
                  Namysłów, Oleśnica, Strzelin, Strzelce Opolskie,
                  Kędzierzyn-Koźle, Opole, Ząbkowice Śl., Kluczbork, Ostrów
                  Wlkp., Krapkowice, Oława, Głubczyce, Prudnik, Olesno,
                  Ostrzeszów, Kłodzko, Kępno, Brzeg, Nysa
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
