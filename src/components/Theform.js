import React from "react";
import './form.css'


class Theform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemname: '',
            itemp: '',
            date: '',
            categories:'',
            id:''
        }
    }

    handleChange =(e)=>{
        e.preventDefault()
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    
    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.addsAform(this.state)
          //sets everything back to empty values at the input field
        this.setState(
            {
                itemname: '',
                itemp: '',
                date: '',
                categories:'',
                id:''
            }
        )
        // console.log(this.state)
    }

    render() {
        return (
            <>
            <div className="wholeForm">
                <h2 className="exp">Expenses </h2>
                <form onSubmit={this.handleSubmit} style={{marginTop:'25px'}}>
                    <label for="itemname" className="itemname">Item Name</label>
                    <br />
                    <input type="text" id="itemname" name="itemname" value={this.state.itemname}
                     onChange={this.handleChange}/>
                    <br /><br />

                    <label for="itemp">Price Gh¢ </label>
                    <br />
                    <input type="number" id="itemp" name="itemp" value={this.state.itemp} 
                    onChange={this.handleChange}/>
                    <br /><br />

                    <label for="date">Date </label>
                    <br />
                    <input type="date"  name="date" value={this.state.date} 
                    onChange={this.handleChange}/>
                    <br /><br />

                    <label for="categories" >Categories </label>
                    <br />
                    <select onChange={this.handleChange} name="categories" value={this.state.categories}
                    style={{backgroundColor:' rgb(228, 236, 236)', color:'brown', width:'200px', borderRadius:'5px'}} >
  
                    <option  onChange={this.handleChange} style={{color: 'brown'}}
                    >Food & Drink</option>

                    <option  onChange={this.handleChange} style={{color: 'brown'}}
                    >Housing and Rent</option>

                    <option onChange={this.handleChange} style={{color: 'brown'}}
                    >Transportation</option>

                    <option onChange={this.handleChange} style={{color: 'brown'}}
                    >Utilities</option>

                    <option onChange={this.handleChange} style={{color: 'brown'}}
                    >Health</option>

                    <option onChange={this.handleChange} style={{color: 'brown'}}
                    >Miscellaneous</option>
                    </select>
    
                    <br /><br />

                    <input type="submit" value="Submit" id="submit" />
                </form>
            </div>    
            </>
        );
    }
}

export default Theform;