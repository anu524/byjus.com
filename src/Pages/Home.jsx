import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Page from '../components/FormSession/FormPage'
import HeroSection from '../components/Hero-Section/HeroSection'
import Company from '../components/Company-Section/Company'
import Offer from '../components/Offer/offer'
import Courses from '../components/Course-Section/Courses'
import AboutUs from '../components/Course-Section/About-Us/AboutUs'
import Updates from '../components/GetUpdates/Updates'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <Fragment>
        <Header />
        <Page />
        <HeroSection />
        <Company />
        <Offer />
        <Courses />
        <AboutUs />
        <Updates />
        <Footer />
    </Fragment>
  )
}

export default Home
