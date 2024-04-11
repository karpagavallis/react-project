import { Component } from "react";

class Sample extends Component{
    render () {
        const myFunc = () => {
            alert("XploCode")
        }
        return <div>
            <button onClick={myFunc}>Click</button>
        </div>
    }
}

export default Sample

