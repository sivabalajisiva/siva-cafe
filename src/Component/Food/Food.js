import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './Food.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './pexels-trista-chen-723198.jpg'
import img2 from './pexels-engin-akyurt-1437267.jpg'
import img3 from './pexels-lumn-1410236.jpg'
import img4 from './pexels-marcel-fiedler-1079020.jpg'
import img5 from './pexels-muffin-creatives-1653877.jpg'
import img6 from './pexels-marvin-ozz-2474658.jpg'

 function Food() {
  return (
    <Container>
      <Row className='mt-5'>
        <p className='menu'>Menu list <span><i class="bi bi-card-checklist"></i></span></p>
        <Col md={4}>
        <div>
        <Card style={{ width: '18rem' }}>
      <img variant="top" alt='img1' src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </Col>
        <Col md={4}>
        <div>
        <Card style={{ width: '18rem' }}>
      <img variant="top" alt='img2' src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </Col>
        <Col md={4}>
        <div>
        <Card style={{ width: '18rem' }}>
      <img variant="top" alt='img3' src={img3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </Col>
      </Row>
      <Row className='mt-5'>
      <Col md={4}>
        <div>
        <Card style={{ width: '18rem' }}>
      <img variant="top" alt='img4' src={img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </Col>
        <Col md={4}>
        <div>
        <Card style={{ width: '18rem' }}>
      <img variant="top" alt='img1' src={img5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </Col>
        <Col md={4}>
        <div>
        <Card style={{ width: '18rem' }}>
      <img variant="top" alt='img6' src={img6} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        </Col>
      </Row>

      {/* row complete */}
    

    </Container>
  )
}

export default Food
