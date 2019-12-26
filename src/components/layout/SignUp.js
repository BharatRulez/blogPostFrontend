import React from "react";
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="col-md-6 offset-md-3">
          <div className="card card-outline-secondary">
            <div className="card-header">
            
              <NavLink to='/signUp'>Sign Up</NavLink>
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
