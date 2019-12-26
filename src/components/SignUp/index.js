import React from "react";
import HomePageNavbar from "../layout/homepageNavbar"

const SignUp = () => {
  return (
      <>
      <HomePageNavbar />
      <div className="row">
    <div className="col s12 m6">
    <div className="col-md-6 offset-md-3">
      <span className="anchor" id="formRegister"></span>

      <div className="card card-outline-secondary">
        <div className="card-header">
          <h3 className="mb-0">Sign Up</h3>
        </div>
        <div className="card-body">
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Full name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
                required=""
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success btn-lg float-right"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div></div></div>

  
      </>
    );
};

export default SignUp;
