import { Component } from "react";

class GetData extends Component{
    constructor(){
        super()
            this.state={
                'Name':'',
                'Age':'25',
                'Address':''
            }
    }
    
    getData = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    displayData = () => {
        console.log(this.state)
    }
    render(){
        return <div>
           <h1> welcome to my form </h1>
           <tr>
            <td>Name</td>
            <td><input type="text" name="Name" value={this.state.Name} onChange={this.getData}></input></td>
           </tr>
           <tr>
            <td>Age</td>
            <td><select  name="Age" value={this.state.Age} onChange={this.getData}>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                </select></td>
           </tr>
           <tr>
            <td>Address</td>
            <td><textarea  name="Address" value={this.state.Address} onChange={this.getData}></textarea></td>
           </tr>
           <button onClick={this.displayData} >View</button>
        </div>
    }
}
export  default GetData