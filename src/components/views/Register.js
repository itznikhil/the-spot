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

import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../utilities/Forms";

const Register = () => {
  const [soundCloudLink, setSoundCloudLink] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [validate, setValidate] = useState({});
  // const [showPassword, setShowPassword] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Form.validator({
      soundCloudLink: {
        value: soundCloudLink,
        isRequired: true,
      },
      spotifyLink: {
        value: spotifyLink,
        isRequired: true,
      },
      youtubeLink: {
        value: youtubeLink,
        isRequired: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();

    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setSoundCloudLink("");
      setSpotifyLink("");
      setYoutubeLink("");
      alert("Successfully Register User");
    }
  };

  return (
    <div className="row g-0 auth-wrapper">
      <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div>
      </div>

      <div className="col-12 col-md-7 col-lg-6 auth-main-col">
        {/* <div className="mb-5 mx-4">
          <Link className="text-link" to="/login">
            Back
          </Link>
        </div> */}
        <div className="d-flex flex-column align-content-end text-center">
          <div className="auth-body mx-auto">
            <p className="text-start">Welcome DJ</p>
            <h3 className="text-start">How about a plug ?</h3>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={register}
                autoComplete={"off"}
              >
                <div className="soundCloudLink mb-3">
                  <label for="soundCloudLink" class="form-label">
                    Soundcloud Link
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.soundCloudLink
                        ? "is-invalid "
                        : ""
                    }`}
                    id="soundCloudLink"
                    name="soundCloudLink"
                    value={soundCloudLink}
                    placeholder="soundcloud.com"
                    onChange={(e) => setSoundCloudLink(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.soundCloudLink
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.soundCloudLink
                      ? validate.validate.soundCloudLink[0]
                      : ""}
                  </div>
                </div>
                <div className="spotifyLink mb-3">
                  <label for="spotifyLink" class="form-label">
                    Spotify Link
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.spotifyLink
                        ? "is-invalid "
                        : ""
                    }`}
                    id="spotifyLink"
                    name="spotifyLink"
                    value={spotifyLink}
                    placeholder="spotify.com"
                    onChange={(e) => setSpotifyLink(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.spotifyLink
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.spotifyLink
                      ? validate.validate.spotifyLink[0]
                      : ""}
                  </div>
                </div>
                <div className="youtubeLink mb-3">
                  <label for="youtubeLink" class="form-label">
                    Youtube Link
                  </label>
                  <div className="input-group">
                    <input
                      type={"text"}
                      className={`form-control ${
                        validate.validate && validate.validate.youtubeLink
                          ? "is-invalid "
                          : ""
                      }`}
                      name="youtubeLink"
                      id="youtubeLink"
                      value={youtubeLink}
                      placeholder="Youtube.com"
                      onChange={(e) => setYoutubeLink(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.youtubeLink
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.youtubeLink
                        ? validate.validate.youtubeLink[0]
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="text-center mb-2">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                    style={{
                      borderRadius: "50px",
                      padding: "12px",
                      backgroundColor: "#616161",
                    }}
                  >
                    Next
                  </button>
                </div>{" "}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                    style={{
                      borderRadius: "50px",
                      padding: "12px",
                      // backgroundColor: "#616161",
                    }}
                  >
                    Skip
                  </button>
                </div>
              </form>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
