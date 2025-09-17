import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
    {/* laout */}
     <Navbar />
        <main className='pt-20'><Home/></main> {/* main content with fixed navbar */}
      <Footer />
    </>
  )
}

export default Layout