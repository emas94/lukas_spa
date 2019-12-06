import React, { Component } from "react"
import "../style/contact.scss"
export class Contact extends Component {
  render() {
    return (
      <>
        <div className="envelope">
          <section>
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contact us
              <div
                className="line mt-2"
                style={{ backgroundColor: "white" }}
              ></div>
            </h2>

            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="send_email.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-4">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        ></input>
                        <label for="name" className="">
                          Imię i nazwisko
                        </label>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                        ></input>
                        <label for="email" className="">
                          Email
                        </label>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                        ></input>
                        <label for="phone" className="">
                          Numer telefonu
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                        ></input>
                        <label for="subject" className="">
                          Temat
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          className="form-control md-textarea"
                        ></textarea>
                        <label for="message">Twoja wiadomość</label>
                      </div>
                    </div>
                  </div>
                  <input type="submit" value="Wyślij" />
                </form>

                <div className="text-center  text-md-left">
                  <a className="btn m-auto  btn-primary">Wyślij</a>
                </div>
                <div className="status"></div>
              </div>

              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>49-300 Brzeg</p>
                  </li>

                  <li>
                    <i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>111-222-333</p>
                  </li>

                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@michalskycompany.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default Contact
