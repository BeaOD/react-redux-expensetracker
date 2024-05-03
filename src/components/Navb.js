import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navb.css'
import { Link } from 'react-router-dom';
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navb() {
  return (
    <Navbar expand="lg" className="  navDiv1" >
  
      
      <Navbar.Brand href="#home" >
        <Link to='/' style={{color:'brown',textDecoration:'none'}}> Home </Link></Navbar.Brand>
     
          <Nav.Link href=""  className='link1'>
            <Link to='/Theform' style={{color:'brown',textDecoration:'none'}}> Form  </Link> </Nav.Link>
        
         
          <Nav.Link href="" className='link2'>
             <Link to='/Theview' style={{color:'brown',textDecoration:'none'}}> Expenditure</Link></Nav.Link>
      

   
  </Navbar>
  )
}

export default Navb