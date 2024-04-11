function Innercomp(props){
    let UI;
    if(props.name=="admin"){
        UI = <h1>Hi admin</h1>
    }
    else if(props.name=="guest"){
        UI = <h1>Welcome my Guest</h1>
    } else {
        UI = <h1> Invalid Login </h1>
    }
    return <div>
        <h1>XploCode Infotech</h1>
        {UI}
    </div>
}
export default Innercomp