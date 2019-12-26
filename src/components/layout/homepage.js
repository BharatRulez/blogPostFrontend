import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import HomePageNavbar from './homepageNavbar'

const HomePage = () => {
  return (
      <>
    <HomePageNavbar />
    <SignIn />
    <SignUp />

    </>
  )
}

export default HomePage