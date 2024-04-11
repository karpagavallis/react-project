import React, { Component } from "react"
import Innercomp from "./Innercomp"
class Outercomp extends Component{
    constructor(){
        super()
        this.usernameref=React.createRef()
        this.state={
            "username":""
        }
    }
    displayName=()=>{
        this.setState({
            "username":this.usernameref.current.value
        })
    }
    render(){
        return<>
        <h1>USERNAME:</h1>
        <input type="text" ref={this.usernameref}/>
        <button onClick={this.displayName}>Login</button>
        {(this.state.username!="") && <Innercomp name={this.state.username}/>}
        </>
    }
}
export default Outercomp