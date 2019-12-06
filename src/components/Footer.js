import React, { Component } from "react"
import "../style/footer.scss"
export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container text-center text-md-left mt-4">
            <div className="row justify-content-end">
              <div className="col md-2 ml-auto mr-auto text-center b-1 br-0">
                <h3 className="m-4">Michalski Company</h3>
                <ul>
                  <li>Mirosław Michalski</li>
                  <li>608 359 768</li>
                  <li>ul. Kościuszki 7 /3</li>
                  <li>49-305 Brzeg opolskie</li>
                  <li>miroslawmichalski700@gmail.com</li>
                </ul>
              </div>

              <hr
                className="clearfix w-100 d-md-none pb-3"
                style={{ color: "white" }}
              ></hr>
              <hr></hr>

              <div className="col md-2 ml-auto mr-auto text-center b-1">
                <h3 className="m-4">You can find us:</h3>
                <ul>
                  <li>
                    <i className=" fab m-2 fa-3x fa-facebook"></i>{" "}
                    <i className="fab m-2 fa-3x fa-twitter-square"></i>
                  </li>
                  <li>
                    <i className="fab  m-2 fa-3x fa-instagram"></i>{" "}
                    <i className="fab  m-2 fa-3x fa-wordpress"></i>
                  </li>
                  <li>
                    <i className="fab m-2 fa-3x fa-google"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="text-center m-3">
            &copy; Michalski Company <span></span>
          </h1>
        </div>
      </>
    )
  }
}

export default Footer
