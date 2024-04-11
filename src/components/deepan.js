class Personal{
    constructor(){
        this.name="deepan"
        this.age="20"
        this.dob="02.09.2003"

    }
}
class Academic extends Personal{
        constructor(){
            super()
            this.tamil="60"
            this.english="60"
            this.computer="60"
        }
        calculating(){
            this.total=this.tamil+this.english+this.computer
            this.avg=this.total/3
        }
}
function displayMark(){
    let obj=new Academic()
    calculating()
    return <div>
        <h1>{obj.name}</h1>
        <h1>{obj.age}</h1>
        <h1>{obj.dob}</h1>
        <h1>{obj.tamil}</h1>
        <h1>{obj.english}</h1>
        <h1>{obj.computer}</h1>
        <h1>{obj.total}</h1>
        <h1>{obj.avg}</h1>
    </div>
}
export default displayMark