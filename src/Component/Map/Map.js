import React from 'react'
import './Map.css'
import {Container,Row,Col} from 'react-bootstrap'


function Map() {
  return (
    <Container>
    <Row>
    <Col md={12}>
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15750.228992058803!2d79.30148379463405!3d9.283792508771286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01e3e842832a8f%3A0x19ef467cb2433406!2sVinayaga%20by%20Poppys%20-%20Rameswaram!5e0!3m2!1sen!2sin!4v1712658269955!5m2!1sen!2sin"
       width='100%'
        height="450" 
        style={{border:"0"}}
        allowfullscreen="" loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   </Col>
   {/* map complete */}

   </Row>
   </Container>

  )
}

export default Map
