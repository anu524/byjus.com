import React from 'react'
import { Container } from 'reactstrap'
import './Courses.css'
import CourseCard from './CourseCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel"
import logo from '../../assets/images/byjus-logo.png'

const courseData = [
  {
    id: '01',
    title: 'JEE',
    lesson: 'Comprehensive learning program for JEE preparation',
  },
  {
    id: '02',
    title: 'NEET',
    lesson: 'Comprehensive learning program for NEET aspirants',
  },
  {
    id: '03',
    title: 'Classes LKG - 3',
    lesson: 'Specially crafted early learning program for young minds',
  },
  {
    id: '04',
    title: 'IAS',
    lesson: 'Personalised learning program for leaders to tomorrow',
  },
  {
    id: '05',
    title: 'CBSE',
    lesson: 'The Central Board of Secondary Education(CBSE) is one of the most prestigious and preferred educational boards in India',
  },
  {
    id: '06',
    title: 'Commerce',
    lesson: 'Commerce is defined as the exchange of goods and services among individuals and business entities.',
  }
]

const Courses = () => {

      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 0,
              slidesToScroll: 0
             
            }
          }
        ]
      };

  return (
    <Container>

      <div className='course_content mx-auto flex flex-col 
      justify-col max-w-sm'>
        <h1 className='text-left text-2xl font-bold my-12'>
          Popular Courses
        </h1>
      </div>

      <Slider {...settings}>

      { courseData.map(item => (
        <CourseCard key={item.id} item={item} />
      ))}


      </Slider>
    </Container>
  )
}

export default Courses