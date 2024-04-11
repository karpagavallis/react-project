class Personal{
    constructor(x,y,z){
        this.name=x
        this.age=y
        this.dob=z

    }
}
class Academic extends Personal{
        constructor(a,b,c){
            super("Deepan","20","02.09.2003")
            this.tamil=a
            this.english=b
            this.computer=c
        }
        calculating(){
            this.total=this.tamil+this.english+this.computer
            this.avg=this.total/3
        }
}
function InheritanceDemo(){
    let obj=new Academic(50,50,50)
    obj.calculating()
    return <div>
        <table>
            <tr>
       <td> <h1>NAME:{obj.name}</h1></td>
        
       <td> <h2>AGE:{obj.age}</h2></td>
       <td> <h2>DOB:{obj.dob}</h2></td>
        </tr>
        <tr>
      <td>  <h3>TAMIL:{obj.tamil}</h3></td>
      <td>   <h3>ENGLISH:{obj.english}</h3></td>
      <td>   <h3>COMPUTER:{obj.computer}</h3></td>
        </tr>
        <tr >

     <td>   <h4>TOTAL:{obj.total}</h4></td>
     <td colspan="2" id="intable">  <h4>AVERAGE:{obj.avg}</h4></td>
        </tr>
        </table>
    </div>
}
export default InheritanceDemo