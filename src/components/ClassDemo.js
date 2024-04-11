class ClassA {
    constructor () {
        this.a = 10
    }
    show() {
        return this.a
    }
}
class ClassB extends ClassA{
    constructor () {
        super()
        this.b = 20
    }
    display(){
        return this.b
    }
}
function ClassDemo () {
    let obj = new ClassB()
    return <div>
        {obj.show()}  <br/>
        {obj.display()}
    </div>
}
export default ClassDemo