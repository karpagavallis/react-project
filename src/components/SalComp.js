import React from "react";

function SalComp(props){
    return<>
       <div>
                    Employee Id = {props.Eid}<br/>
                    Employee Name = {props.Ename}<br/>
                    Date of Joining = {props.Doj}<br/>
                    Employee Age = {props.Age}<br/>
                    Net Salary = {props.final}
        </div>
    </>
}

export default SalComp