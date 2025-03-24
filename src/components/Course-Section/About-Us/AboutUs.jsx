import React from 'react'
import './About-Us.css'
import { Container, Row, Col } from 'reactstrap'
import aboutImg from '../../../assets/images/about.jpg'

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='about_content'>
              <h2>About Us</h2>
                <p>BYJU’S is India’s largest ed-tech company and the creator of India’s most loved school learning app. Launched in 2015, BYJU’S offers highly personalised and effective learning programs for classes 1 – 12 (K-12), and aspirants of competitive exams like JEE, IAS etc. </p>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className='about_img'>
              <img src={aboutImg} alt="" className='w-100' />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default AboutUs