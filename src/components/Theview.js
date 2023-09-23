import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import Peritemview from './Peritemview'

const Theview =(props)=> {

  return (
    <Container >
        <Row>
          <h3 style={{textAlign:'center',
           marginBottom:'20px', fontFamily:'roboto'}}>All Expenses Here</h3>
           
            {props.formsData.map((theform,index)=>{
                return(
                    <Peritemview 
                    formInfo={theform} key={index}
                    editsAform={props.editsAform}
                    deleteIt={props.deleteIt}
        />

                )
            })}
        
        </Row>
    </Container>
  )
}


export default Theview