import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navb from "./components/Navb";
import Theform from "./components/Theform";
import Theview from './components/Theview'
import Homepage from './components/Homepage'
import { connect } from 'react-redux';
import {addActionForm} from '../src/store/action'



class Rouuter extends React.Component {
constructor(props){
    super(props)
    this.state = {
        allthedata:[
            {
                itemname: '',
                itemp: '',
                date: '',
                categories:'',
                id:''
                
            },
          
        ]
    }
}
    addNewform =(form) =>{
        form.id = Math.random().toString()
        this.setState({
            allthedata:[...this.state.allthedata, form]
        })
    }

    editNewform =(id,updatedForm)=>{
        //id of what you want to edit and the new data
        this.setState({
            allthedata: this.state.allthedata.map(eachForm => 
                eachForm.id ===id ? updatedForm: eachForm)
        })
    }

    deleteForm =(id) => {
        //pick one person/form and check whether their id matches
        let notDeletedForm = this.state.allthedata.filter(form => form.id !==id)
        this.setState({ allthedata: notDeletedForm})
    }
   
     render(){
    return (
<Router>
    <Navb/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Theform" element={<Theform 
         addsAform={this.addNewform}/>}/>
        <Route path="/Theview" element={<Theview 
        formsData={this.state.allthedata}
        editsAform={this.editNewform}
        deleteIt={this.deleteForm}
        />}/>
    </Routes>

</Router>
    )
} 
} 
const mapStateToProps = (state) => ({
    allthedata: state.allthedata
  });
  
  const mapDispatchToProps ={
    addActionForm: addActionForm
  
  }
export default connect(mapStateToProps, mapDispatchToProps)(Rouuter)
