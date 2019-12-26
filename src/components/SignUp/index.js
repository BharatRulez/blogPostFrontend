import React from "react";
import HomePageNavbar from "../layout/homepageNavbar"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createUser } from '../../utils/api'

const SignUp = () => {
    const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const history  = useHistory();
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    createUser({ fullName, email, password }).then(data => {
      console.log(data);
       history.push('/login')
    
    })
    }
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
          <form className="form" onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={e => setFullName(e.target.value)}
               value = {fullName}
                placeholder="Full name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
              value= {email}
              onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
               value={password}
               onChange={e => setPassword(e.target.value)}
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
