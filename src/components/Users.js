import React from "react";
import NavFile from "./NavFile";
import { Link, Outlet } from "react-router-dom";

function Users(){
    return <div>
         <Link to='/users/1'>User 1</Link>
         <Link to='/users/2'>User 2</Link>
         <Link to='/users/3'>User 3</Link>
         <Outlet/>
    </div>
}
export default Users