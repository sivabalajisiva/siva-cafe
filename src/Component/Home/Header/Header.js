import React from 'react'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import {Container , Row , Col} from 'react-bootstrap'
import img1 from './pexels-elevate-1267320.jpg'
import img2 from './pexels-valeria-boltneva-1639562.jpg'
import img3 from './pexels-robin-stickel-70497.jpg'
// carosal over next food items
import dis from './disount1.jpg'



function Header() {
  return (
    <Container>
     <Row className='carosal'>
     <Col lg={8}>
      <div className='carosal1'>
     <Carousel>
      <Carousel.Item interval={1000}>
        <img src={img1} className='img1' alt='img' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={img2} className='img1' alt='img' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={img3} className='img1' alt='img' text= "Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </Col>
    </Row>
    {/* carosal over */}
    <Row>
      <Col xs={12}>
         <p className='words'>Siva foods and delivery</p>
         <p className='words1'>Siva foods have all types of indian food amd north indian food. siva food
          made high quality food. we provide service and delivery siva food give customer 
          satiesfaction we delivery food for customer in short time period. food is our 
          love language Tasting the world, one dish at a time. we give the food and delivery

         </p>
      </Col>
    </Row>
{/* start discount */}
    <Row>
    <Col xs={12} md={6} >
       <img src={dis} alt='img' className='dis'/>
    </Col>
    <Col xs={12} md={6}>
       <div className='diss'>
        <p>discount</p>
        <p style={{color:' crimson'}}>25%</p>
        <p>use the discount</p>
        <p style={{color:"ButtonFace"}}>summer offer</p>
       </div>
    </Col>
    </Row>
{/* next start to your mint */}
   


    </Container>
  )
}

export default Header
