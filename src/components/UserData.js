import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mystyle from 'styled-components'
import StateTable from "./StateTable";

const NewSyle = mystyle.h1`
    color: red;
    font-weight:800;
`

function UserData() {
    const myparams = useParams()
    const [data, setData] = useState({
        "id":"",
        "name":"",
        "salary":"",
        "course":""
    });
    console.log(data)
    useEffect(() => {   
        fetch("http://localhost:3000/Record/" + myparams.id)    
            .then((res) => res.json())
            .then((data) => {
                setData(data,()=>console.log("Single Data"+data))
            })
    }, [])

    const saveData = (event) =>{
        console.log(event)
        setData({
            [event.target.name]:event.target.value
        })
    }
    const PostData= ()=>{
        console.log("PUT "+JSON.stringify(data))
         let options = {
            "method" : "PUT",
            "body" : JSON.stringify(data),
            "header" : {
                "Content-Type":"application/json"
            }
        }
        fetch("http://localhost:3000/Record/" + myparams.id, options)
        .then((res) => res.json())
            .then((data) =>console.log(data))
   
    }
    console.log(myparams)
    return <>
        <NewSyle> Welcome </NewSyle>
        <h3>User Id : <span style={{"color":"red"}}>{data.id}</span></h3>
        <h3>User Name : <span style={{"color":"red"}}>{data.name}</span></h3>
        <h3>User Course : <span style={{"color":"red"}}>{data.course}</span></h3>
        <h3>User Salary : <span style={{"color":"red"}}>{data.salary}</span></h3>

        <form>
                User Id :<input type="text" value={data.id} onChange={saveData} name="id"/><br/>
                User Name :<input type="text" value={data.name} onChange={saveData} name="name"/><br/>
                User Course :<input type="text" value={data.course} onChange={saveData} name="course"/><br/>
                User Salary :<input type="text" value={data.salary} onChange={saveData} name="salary"/><br/>
                <button type="button" onClick={()=>PostData()}>Submit</button>
        </form>
    </>
}
export default UserData