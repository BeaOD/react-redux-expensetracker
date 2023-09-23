//this is how one submitted bill should look like

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Col, Row, Modal } from 'react-bootstrap';
import Editexpense from './Editexpense';
import { useState } from 'react';
import { connect } from 'react-redux';
import {deleteActionForm} from '../store/action'

function Peritemview(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) =>{
    e.preventDefault()
    props.deleteIt(props.formInfo.id)
  }
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Expenditure
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Editexpense 
            formInfo={props.formInfo}
            editsAform={props.editsAform}
            closeModal={handleClose}
            />
    </Modal.Body>
    </Modal>

    <Col md='3' style={{backgroundColor:'#42f593', 
    borderRadius:'5px' , fontFamily:'monospace', marginRight:'7px', marginTop:'10px'}}>
        <h3 style={{ textAlign:'center'}}> Expenses</h3>
        <Row>
    <Card style={{ width: '18rem' , fontSize:'14px'}}>
      <Card.Body>
        <Card.Title>{ props.formInfo.itemname}</Card.Title>
        <Card.Subtitle className="mb-2">Gh¢ { props.formInfo.itemp}</Card.Subtitle>
        <Card.Subtitle> { props.formInfo.date}</Card.Subtitle >
        <Card.Subtitle>Categories: 
        { props.formInfo.categories}
        </Card.Subtitle >
        <Card.Link href="#" style={{color:'none',textDecoration:'none'}}
        onClick={handleShow}>Edit</Card.Link>
        <Card.Link href="#"style={{color:'red',textDecoration:'none'}}
        onClick={handleDelete}>Delete</Card.Link>
      </Card.Body>
    </Card>
    </Row>
    </Col>
    </>
  );
}
const mapDispatchToProps ={
  deleteActionForm: deleteActionForm

}
 

export default connect(null,mapDispatchToProps)(Peritemview); 
    


    