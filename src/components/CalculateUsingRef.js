import React, { Component } from "react";

class CalculateUsingRef extends Component{
    constructor(){
        super()
        this.tamilref=React.createRef()
        this.englishref=React.createRef()
        this.mathsref=React.createRef()
        this.state={
            'Tamil':'',
            'English':'',
            'Maths':'',
            'Grade':''
        }
       
    }
    displaygrade=()=>{
        let total=(parseInt(this.tamilref.current.value)+parseInt(this.englishref.current.value)+parseInt(this.mathsref.current.value))/3
        this.setState({
            'Tamil':this.tamilref.current.value,
            'English':this.englishref.current.value,
            'Maths':this.mathsref.current.value
        
        })
        if(total>=80){
            this.setState({
                'Grade':'A'
            })
        }
        else if(total>=60 && total<80){
            this.setState({
                'Grade':'B'
            })
        }
        else if(total>=40 && total<60){
            this.setState({
                'Grade':'C'
            })
        }
        else{
            this.setState({
                'Grade':"Fail"
            })
        }
    } 
    render(){
        return<div>
            Tamil:<input type="text" ref={this.tamilref}></input><br/>
            English:<input type="text" ref={this.englishref}></input><br/>
            Maths:<input type="text" ref={this.mathsref}></input><br/>
            <button onClick={this.displaygrade}>calculate</button><br/>
            TAMIL:{this.state.Tamil}<br/>
            ENGLISH:{this.state.English}<br/>
            MATHS:{this.state.Maths}<br/>
            Grade:{this.state.Grade}<br/>
        </div>
    }
}
export default CalculateUsingRef