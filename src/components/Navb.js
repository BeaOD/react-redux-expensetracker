import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
    {/* <Container > */}
      
      <Navbar.Brand href="#home">
        <Link to='/' style={{color:'black',textDecoration:'none'}}> Home </Link></Navbar.Brand>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        
          <Nav.Link href="" >
            <Link to='/Theform' style={{color:'black',textDecoration:'none'}}>The Form  </Link> </Nav.Link>
        
         
          <Nav.Link href="" >
             <Link to='/Theview' style={{color:'black',textDecoration:'none'}}>View Added Expenses</Link></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
  )
}

export default Navb