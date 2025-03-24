import React from 'react'
import { Container, Row, Col } from "reactstrap"
import "./Hero-Section.css"
import SearchIcon from '../../assets/images/search1.svg'
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>


          <Col lg='6' md='6'>
            <div className='hero_content'>
              <h1 className="mb-4">
                <span className='e-purple'>E</span>
                - Learning <br />Anywhere <br /> In the world
              </h1>
              <p className='mb-4'>The best place to learn 
                programming with beginner friendly tutorials and 
                exapmles.
              </p>

              <div className="search">
                <img src={SearchIcon} alt="search" />
                <input type="text" placeholder='What do you want to learn' />
                <button className='btn-search'>SEARCH COURSES</button>
              </div>
            </div>
          </Col>

        <Col lg='6' md='6'>
        <div className="hero-img">
            <img src={heroImg} alt="hero-img" className='w-800'/>
        </div>
        </Col>

        </Row>
      </Container>
    </section>
  )
}

export default HeroSection