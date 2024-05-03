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
        <Modal.Header closeButton style={{backgroundColor:'rgb(35, 71, 71)'}}>
            <Modal.Title style={{fontWeight:'bold', color:'brown'}}>
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

    <Col md='3' style={{backgroundColor:' rgb(38, 12, 62)', color:'brown', height:'200px',
    borderRadius:'5px' , fontFamily:'arial', marginRight:'7px', marginTop:'10px'}}>
        <h3 style={{ textAlign:'center'}}> Expense</h3>
        <Row>
    <Card style={{ width: '18rem' , fontSize:'14px', backgroundColor:'rgb(38,12,62)', height:'150px'}}>
      <Card.Body style={{height:'70px'}}>
        <Card.Title style={{fontSize:'16px', fontWeight:'bold', color:'gray'}}>{ props.formInfo.itemname}</Card.Title>
        <Card.Subtitle className="mb-2"  style={{ color:'gray'}}>Gh¢ { props.formInfo.itemp}</Card.Subtitle>
        <Card.Subtitle style={{ color:'gray'}}> { props.formInfo.date}</Card.Subtitle >
        <Card.Subtitle style={{ color:'gray'}}>
        { props.formInfo.categories}
        </Card.Subtitle >
        <Card.Link href="#" style={{color:'green',textDecoration:'none', height:'10px', fontWeight:'bold', marginTop:'27px'}}
        onClick={handleShow}>Edit</Card.Link>
        <Card.Link href="#"style={{backgroundColor:'rgb(38,12,62)',textDecoration:'none', width:'100px', height:'20px'}}
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
    


    