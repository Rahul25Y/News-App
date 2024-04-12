import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import im from './asset/681803.png';
export default function NavBar({ setCategory }) {
  return (
    <>
      <Navbar className="bg-custom" variant="dark"> 
        <Container>
         
          <Navbar.Brand className=''><img src={im} className='img-1'/>NewsMap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategory('technology')} >
            <Button variant="outline-light">Technology</Button>
            </Nav.Link>
            <Nav.Link onClick={() => setCategory('business')}>
           <Button variant="outline-primary"> Business</Button>
           </Nav.Link>
            <Nav.Link onClick={() => setCategory('health')}>
            <Button variant="outline-warning"> Health</Button>
            </Nav.Link>
            <Nav.Link  onClick={() => setCategory('science')}>
           <Button variant="outline-danger"> Science</Button>
            </Nav.Link> 
            <Nav.Link  onClick={() => setCategory('sport')}>
           <Button variant="outline-info"> Sport </Button>
            </Nav.Link> 
            <Nav.Link  onClick={() => setCategory('entertainment')}>
            <Button variant="outline-light">Entertainment</Button>
            </Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
