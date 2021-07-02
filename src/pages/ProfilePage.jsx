import React from 'react'

import Profile from '../components/Profile'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className='custom-form with-header'>
        <Profile />
      </div>
      <Footer />
    </>
  )
}

export default ProfilePage
