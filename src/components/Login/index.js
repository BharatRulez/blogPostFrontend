import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInUser } from "../../utils/api";
import HomePageNavbar from "../layout/homepageNavbar"


const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();


const handleSubmit = (e) =>{
  e.preventDefault()
  
  signInUser({ userEmail, userPassword }).then(data => {
    console.log(data);
    
  
     history.push('/posts')
  
  })
  }
 return (
   <>
   <HomePageNavbar />
   <div className="row">
      <div className="col s12 m6">
        <div className="col-md-6 offset-md-3">
          <div className="card card-outline-secondary">
            <div className="card-header">
              <h3 className="mb-0">Login</h3>
            </div>
            <div className="card-body">
              <form className="form" onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                    className="form-control"
                  
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={userPassword}
                    onChange={e => setUserPassword(e.target.value)}
                    className="form-control"
                    required=""
                  
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success btn-lg float-right"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   </>
   
  );
};

export default Login;
