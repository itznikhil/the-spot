/*
 Copyright (c) 2021 Christer Johansson of Sweden Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import GooglePlayBadge from "./google_play_badge.png";
import AppleAppStore from "./apple_app_store.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div
        className="d-flex align-items-center h-75"
        style={{ backgroundColor: "#E5E7EB" }}
      >
        <nav className="navbar navbar-expand-sm fixed-top navbar-light">
          <div className="container">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbar1"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Signup as DJ
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <img src={GooglePlayBadge} alt="google play badge" height={60} />
            <img src={AppleAppStore} alt="apple app store" height={40} />
          </div>
        </nav>
        <div className="container">
          <h1>We can get you to the spot.</h1>
          <p>
            Play the mixes while we handle your business. A trusted Dj booking
            app that brings the party to you.{" "}
          </p>
          <button type="button" className="btn btn-primary">
            Get Started
          </button>
          <button
            type="button"
            className="btn btn-link"
            style={{ color: "black" }}
          >
            <BsFillPlayCircleFill />
            Demo Video
          </button>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="mb-5">Exciting Features</h2>
        <div className="row">
          <div className="col-xs-6 col-md-4">
            <figure className="box-1">
              <img
                className="services-imgs"
                src="https://images.placeholders.dev/?width=200&height=100&bgColor=%23000&textColor=rgba(255,255,255,0.5)"
                alt="rehab"
              />
              <figcaption className="figcaption">
                <h4 className="mt-3">Set your fees</h4>
                <p>
                  Be your own boss and set your booking fee, cancellations, and
                  much more. No hidden rates.
                </p>
                <a href="#" style={{ color: "#000", textDecoration: "none" }}>
                  Know more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-6 col-md-4">
            <figure className="box-1">
              <img
                className="services-imgs"
                src="https://images.placeholders.dev/?width=200&height=100&bgColor=%23000&textColor=rgba(255,255,255,0.5)"
                alt="drenagem"
              />
              <figcaption className="figcaption">
                <h4 className="mt-3">Own your schedule</h4>
                <p>
                  Never miss a booking or upcoming gig with our efficient layout
                  that keeps you on top of things.
                </p>
                <a href="#" style={{ color: "#000", textDecoration: "none" }}>
                  Know more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-0">
            <figure className="box-1">
              <img
                className="services-imgs"
                src="https://images.placeholders.dev/?width=200&height=100&bgColor=%23000&textColor=rgba(255,255,255,0.5)"
                alt="traumato-ortopédica"
              />
              <figcaption className="figcaption">
                <h4 className="mt-3">Know your doe</h4>
                <p>
                  Be your own boss and set your booking fee, cancellations, and
                  much more. No hidden rates.
                </p>
                <a href="#" style={{ color: "#000", textDecoration: "none" }}>
                  Know more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-6 col-md-4">
            <figure className="box-1">
              <img
                className="services-imgs"
                src="https://images.placeholders.dev/?width=200&height=100&bgColor=%23000&textColor=rgba(255,255,255,0.5)"
                alt="rehab"
              />
              <figcaption className="figcaption">
                <h4 className="mt-3">Share your sound</h4>
                <p>
                  Never miss a booking or upcoming gig with our efficient layout
                  that keeps you on top of things.
                </p>
                <a href="#" style={{ color: "#000", textDecoration: "none" }}>
                  Know more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-6 col-md-4">
            <figure className="box-1">
              <img
                className="services-imgs"
                src="https://images.placeholders.dev/?width=200&height=100&bgColor=%23000&textColor=rgba(255,255,255,0.5)"
                alt="drenagem"
              />
              <figcaption className="figcaption">
                <h4 className="mt-3">Build your community</h4>
                <p>
                  Your timeline, your choice. Share your most amazing moments
                  with your peers.
                </p>
                <a href="#" style={{ color: "#000", textDecoration: "none" }}>
                  Know more
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-0">
            <figure className="box-1">
              <img
                className="services-imgs"
                src="https://images.placeholders.dev/?width=200&height=100&bgColor=%23000&textColor=rgba(255,255,255,0.5)"
                alt="traumato-ortopédica"
              />
              <figcaption className="figcaption">
                <h4 className="mt-3">Know your metrics</h4>
                <p>
                  We monitor everything, reviews, payments, bookings, leeds.
                  We’ve got you covered.
                </p>
                <a href="#" style={{ color: "#000", textDecoration: "none" }}>
                  Know more
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
