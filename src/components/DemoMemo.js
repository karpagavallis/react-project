import { useState, useMemo } from "react"

const DemoMemo = () => {
    const [myState,setMyState] = useState(100)
    const [myData,setData] = useState ("Ram")

    const calc = () => {
        let i
        for(i=0; i<1000; i++) {
            console.log(i)
        }
        return i
    }

    const res = useMemo(()=>calc(),[])

    return <>
        <h1>Welcome {res}</h1>
        <h2>{myData}</h2>
        <button onClick={()=>setData("Sam")}>Change Name</button>
        <button onClick={()=>setMyState(500)}>Change State</button>
    </>
}

export default DemoMemo