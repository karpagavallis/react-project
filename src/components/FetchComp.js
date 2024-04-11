import React, { Component } from'react'

class FetchComp extends Component{
    constructor(){
        super()
        this.state={
            "data":[]            
        }
    }
    componentDidMount(){        
        fetch('https://mocki.io/v1/361d1a21-7abe-46d8-b0c0-59ae7f7b5458')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                "data":data
            })
        })
            
    }
    render(){
        const recordArr=this.state.data.map((data)=>
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.course}</td>
            <td>{data.salary}</td>
        </tr>
        )  
     return<>
       <table>
         <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Course</th>
            <th>Salary</th>
         </tr>         
            {recordArr}
        
       </table>
     </>         
    }
}

export default FetchComp