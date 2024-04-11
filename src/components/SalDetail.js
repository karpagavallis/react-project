import React, { Component } from "react";
import SalComp from "./SalComp";

class SalDetail extends Component{
    constructor(){
        super()
        this.state={
            "eid":"",
            "ename":"",
            "doj":"",
            "age":"",
            "bpay":"",
            "flag":"0"
        }
        this.eidref=React.createRef()
    }
    componentDidMount(){
        this.eidref.current.focus()
    }
    getdetail=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    findHra=()=>{
        let hra = this.bpay * 3/100
        return hra
    }
    findDa=()=>{
        let da = this.bpay * 2/100
    }
    findTa=()=>{
        let ta= this.bpay * 4/100
    }
    findDed=()=>{
        let ded = this.bpay * 2.5/100
    }
    salCalc=()=>{
        
        let hra = this.findHra()
        console.log("hi" + hra)
        let da = this.findDa()
        let ta = this.findTa()
        let ded = this.findDed()
        let final = this.bpay + hra + da + ta - ded        
        this.setState({
            "flag":"1"
        })
        return final

    }
    render(){
        return <>
         <form>
            Employee Id:<input type="text" name="eid" value={this.state.eid} onChange={this.getdetail} ref={this.eidref}/><br/>
            Employee Name:<input type="text" name="ename" value={this.state.ename} onChange={this.getdetail} /><br/>
            Date of Joining:<input type="text" name="doj" value={this.state.doj} onChange={this.getdetail} /><br/>
            Employee Age:<input type="text" name="age" value={this.state.age} onChange={this.getdetail} /><br/>
            Employee Basic Pay:<input type="text" name="bpay" value={this.state.bpay} onChange={this.getdetail} /><br/>
            <button type="button" onClick={this.salCalc}>Find Salary</button> 
            
         </form>
         {this.state.flag!=0 && <SalComp Eid={this.state.eid} Ename={this.state.ename} Doj={this.state.doj} Age={this.state.age} Sal={this.state.final}/>}

        </>
    }
}
export default SalDetail