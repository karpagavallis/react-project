class DemoClass {
    // It is a special method
    constructor () {
        console.log("Object Created")
        this.a = 10
    }
    
    // Member method
    sq () {
        return this.a * this.a
    }
}
function OopsClass () {
    let firstObject = new DemoClass()
    let secondObject = new DemoClass()
    
    return <div>
        <h2>Square Object 1= {firstObject.sq()}</h2>

        <h2>Square Object 2= {secondObject.sq()}</h2>
    </div>
}
export default OopsClass
