import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import HomePageNavbar from './homepageNavbar'

const HomePage = () => {
  return (
    <>
    <HomePageNavbar />
    <div className="card-container">
    <SignIn />
    <SignUp />
    </div>
    </>
  )
}

export default HomePage