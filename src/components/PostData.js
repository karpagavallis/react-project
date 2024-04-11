import React, { Component } from "react";

class PostData extends Component{
constructor(){
    super()
    this.state={ 
            "id":"",
            "name":"",
            "course":"",
            "salary":"",   
            "flag":"0"    
    }
    this.idref=React.createRef()
}  
componentDidMount(){
    this.idref.current.focus()
}
  saveData=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
  }
 postData=()=>{
    let options={
        "method":"POST",
        "body":JSON.stringify(this.state),
        "headers":{
            "content-type":"application/json"
        }
    }
    fetch('http://localhost:3000/Record',options)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    alert("added Successfully")

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
     return <>
     <form>
        <label>Id:</label>
        <input type="text" name="id" onChange={this.saveData} ref={this.idref}/><br/>
        <label>Name:</label>
        <input type="text" name="name" onChange={this.saveData}/><br/>
        <label>Course:</label>
        <input type="text" name="course" onChange={this.saveData}/><br/>
        <label>Salary:</label>
        <input type="text" name="salary" onChange={this.saveData}/><br/>
        <button type="button" onClick={this.postData}>Submit</button>  
     </form>
     </>
  }
}
export default PostData
