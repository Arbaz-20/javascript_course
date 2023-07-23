import Saniya from "./oops.js";
class Arbaz{

    constructor() {
        this.saniya = new Saniya()
    }

    ArbazUsingSaniya = () =>{
        let value = ""
        let arbaz = this.saniya.SaniyaMethod(value)
        console.log(arbaz)
    }

}
export default Arbaz