import { useDispatch,useSelector } from "react-redux"

function UserRedux () {
    const pos = useSelector(state => state.position)
    const dispatch = useDispatch()
  
    return <>
        <h1>XploCode Private Linited</h1>
        <h2>Position : {pos}</h2>
        <button onClick={()=>dispatch({'type':'designer'})}>Designer</button>
        <button onClick={()=>dispatch({'type':'developer'})}>Developer</button>
    </>
}

export default UserRedux