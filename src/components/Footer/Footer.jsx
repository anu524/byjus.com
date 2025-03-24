import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import footerImg from '../../assets/images/footer.png'

const footerQuickLinks =[
  {
    display : 'Resource',
    url : '#'
  },
  {
    display : 'Blog',
    url : '#'
  },
  {
    display : 'Documents',
    url : '#'
  }
]

const footerComLinks = [
  {
    display : 'Support',
    url : '#'
  },
  {
    display : 'Help',
    url : '#'
  }
]

const footerInfoLinks = [
  {
    display : 'About Us',
    url : '#'
  },
  {
    display : 'Partners',
    url : '#'
  },
  {
    display : 'Contact us',
    url : '#'
  }
]

const footerCoursesLinks = [
  {
    display : 'JEE',
    url : '#'
  },
  {
    display : 'NEET',
    url : '#'
  },
  {
    display : 'Classes LKG-3',
    url : '#'
  },
  {
    display : 'IAS',
    url : '#'
  },
  {
    display : 'CBSE',
    url : '#'
  },
  {
    display : 'Commerce',
    url : '#'
  }
]

const Footer = () => {
  return (
    <footer className= 'footer' style={{background: '#000'}}>
      <Container>
        <Row>
          <Col lg='3' md='6'>
          <h6 className='text-white pt-4'>Courses</h6>
            <ListGroup className='link_list'>
              {
                footerCoursesLinks.map((item, index) => (<ListGroupItem key={index} className='border-0 ps-0 link_item'>
                    <a href={item.url}>
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3' md='6'>
          <h6 className='text-white pt-4'>Explore</h6>
            <ListGroup className='link_list'>
              {
                footerQuickLinks.map((item, index) => (<ListGroupItem key={index} className='border-0 ps-0 link_item'>
                    <a href={item.url}>
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3' md='6'>
          <h6 className='text-white pt-4'>Community</h6>
            <ListGroup className='link_list'>
              {
                footerComLinks.map((item, index) => (<ListGroupItem key={index} className='border-0 ps-0 link_item'>
                    <a href={item.url}>
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3' md='6'>
          <h6 className='text-white pt-4'>BYJU'S</h6>
            <ListGroup className='link_list'>
              {
                footerInfoLinks.map((item, index) => (<ListGroupItem key={index} className='border-0 ps-0 link_item'>
                    <a href={item.url}>
                      {item.display}
                    </a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='12'>
          <div className='d-flex align-items-center justify-content-center
          gap-2 p-4 logo'>
            <img src={footerImg} alt="" />
          </div>

          <div className='follows'>
            <p className='mb-0 d-flex align-items-center
            justify-content-center gap-2 text-white'>
            © 2025,BYJU'S. All rights reserved.
            </p>

            <div className='d-flex align-items-center
            justify-content-center gap-2 links_socials'>
              <span>
                {" "}
                <a href='facebook.com'>
                  <i className='ri-facebook-fill text-white'></i>
                </a>
              </span>

              <span>
                {" "}
                <a href='twitter.com'>
                  <i className='ri-twitter-fill text-white'></i>
                </a>
              </span>

              <span>
                {" "}
                <a href='linkedin.com'>
                  <i className='ri-linkedin-fill text-white'></i>
                </a>
              </span>

              <span>
                {" "}
                <a href='instagram.com'>
                  <i className='ri-instagram-fill text-white'></i>
                </a>
              </span>

            </div>
          </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer