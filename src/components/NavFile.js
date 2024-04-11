import React, { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Users from "./Users";
import UserDetail from "./UserDetail";
import DetailComp from "./DetailCom";
import UserData from "./UserData";
import OopsClass from "./OopsClass";
import StateTable from "./StateTable";

class NavFile extends Component{
    render(){
        return<>
            <NavLink to="">Home</NavLink>
            <NavLink to="users">Detail</NavLink>
            <Routes>   
                    <Route path='' element={<OopsClass/>}/>            
                    <Route path='users' element={<StateTable/>}/>                        
                    <Route path="/users/:id" element={<UserData/>}/>
                                      
            </Routes>
               
        </>
    }
}
export default NavFile