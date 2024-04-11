import SecondComp from "./SecondComp"

class Test {
    // data members
    a = 10
    b = 20

    // member method
    sum () {
        let c = this.a + this.b
        return c
    }
}

function NewElement () {

    let firstObj = new Test()
    let secondObj = new Test()

    return <div>
        <h1>First Obj Result {firstObj.sum()}</h1>
        <h1>Second Obj Result {secondObj.sum()}</h1>
    </div>
 }

export default NewElement