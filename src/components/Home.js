import React, { Component } from "react"
import "../style/home.scss"

export class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          {" "}
          <div className="home__text">
            <div className="home--p">
              <h1>Nasza firma zajmuje się :</h1>
              <p>1 Montażem i konserwacją reklam</p>
              <p>2 Pracami filmowymi i fotograficznymi.</p>
              <p>3 Pielęgnacją oraz wycinką drzew.</p>
              <p>4 Myciem okien i elewacji.</p>
              <p>5 Konserwacją oświetlenia i sieci energetycznych.</p>
              <p>6 Ocieplaniem budynków i innych obiektów</p>
              <p>7 Pracami blacharsko – dekarskimi.</p>
              <p>8 Montażem i konserwacją hal oraz konstrukcji stalowych.</p>
              <p>9 Konserwacją oświetlenia i sieci energetycznych.</p>
              <p>10 Malowaniem i konserwacją obiektów.</p>
              <p>11 Malowaniem i konserwacją obiektów.</p>
              <p>12 Malowaniem i konserwacją obiektów.</p>
              <p>13 Malowaniem i konserwacją obiektów.</p>
            </div>
          </div>
        </div>
        <div className="homePhoto"></div>
      </>
    )
  }
  componentDidMount() {
    const listOfP = [...document.querySelectorAll("p")]
    console.log(listOfP)
    let index = 0
    const showSlides = () => {
      let i = 0
      for (i; i < listOfP.length; i++) {
        listOfP[i].classList.remove("animation__p")
      }
      index++
      if (index > listOfP.length) {
        index = 1
      }
      listOfP[index - 1].classList.add("animation__p")

      setTimeout(showSlides, 4000)
    }

    showSlides()
  }
}

export default Home
