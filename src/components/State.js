import { Component } from "react";
class State extends Component {
    constructor() {
        super()
        this.state ={
           "name": "deepan"
        }
    }
    DisplayVal = () => {
        this.setState ({
            "name": "prisuddhan"
        },()=>console.log(this.state.name))  
    }
    render() {
        return <>
            <h1>{this.state.name}</h1>
            <button onClick={this.DisplayVal}>click</button>
        </>

    }
}
export default State