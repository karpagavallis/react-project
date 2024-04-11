import { useDispatch,useSelector } from "react-redux"

function UserComp () {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
  
    return <>
        <h1>XploCode Bakery</h1>
        <h2>Cake Count : {count}</h2>
        <button onClick={()=>dispatch({'type':'bake'})}>+</button>
        <button onClick={()=>dispatch({'type':'sell'})}>-</button>
    </>
}

export default UserComp