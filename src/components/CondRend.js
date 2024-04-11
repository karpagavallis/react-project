import { Component } from "react";

class CondRend extends Component {
    render () {
        let display = true
        if(display) {
            return <h1> Welcome </h1>
        } else {
            return <h2>BYE</h2>
        }
    }
}

export default CondRend