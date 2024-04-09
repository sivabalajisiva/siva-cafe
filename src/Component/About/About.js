import React from 'react'
import './About.css'
import {Container,Row,Col} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';

function About() {
  return (
    <Container fluid>
      <p className='our'>Check your orders</p>
      <Row>
        <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">Pala</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>5 chapathi,2 channa masala</Toast.Body>
    </Toast>
           </div>
        </Col>
        <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">anpu</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>masal thosai 2 </Toast.Body>
    </Toast>
           </div>
        </Col>
        <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">tharun</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>5 prota and 2 eggs</Toast.Body>
    </Toast>
           </div>
        </Col>
        
      </Row>
      {/* finish first row */}
      <Row>
      <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">Rega</strong>
        <small>16 mins ago</small>
      </Toast.Header>
      <Toast.Body>9 chapathi,pannir masala</Toast.Body>
    </Toast>
           </div>
        </Col>
        <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">Mani</strong>
        <small>17 mins ago</small>
      </Toast.Header>
      <Toast.Body>full meals</Toast.Body>
    </Toast>
           </div>
        </Col>
        <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">thara</strong>
        <small>17 mins ago</small>
      </Toast.Header>
      <Toast.Body>pitzza</Toast.Body>
    </Toast>
           </div>
        </Col>
      </Row>
      {/* finish 2 row */}
      <Row>
      <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">ratha</strong>
        <small>18 mins ago</small>
      </Toast.Header>
      <Toast.Body>chicken briyani</Toast.Body>
    </Toast>
           </div>
        </Col>
        <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">sai</strong>
        <small>19</small>
      </Toast.Header>
      <Toast.Body>5 itly vadai</Toast.Body>
    </Toast>
           </div>
        </Col>
        <Col md={4}>
        <div className='bg'>
        <Toast>
      <Toast.Header>
        <strong className="me-auto">naveen</strong>
        <small>19 mins ago</small>
      </Toast.Header>
      <Toast.Body>grill</Toast.Body>
    </Toast>
           </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
