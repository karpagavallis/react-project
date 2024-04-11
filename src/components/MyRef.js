import React, { Component } from 'react'

class MyRef extends Component {
    render () {
        let arrValues = ["Home","About","Contact"]
        // if a function passed as an argument is nothing but callback func
        let myDesign = arrValues.map((value,index)=><h1 key={index}>{value}</h1>)
        return <>
           {myDesign}
        </>
    }
}

export default MyRef