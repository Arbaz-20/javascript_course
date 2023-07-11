let saniya ="arbaz"
let array = ["sofiya","alfiya","alam","saniya","raisa","anis","hakim"];

if (array.includes(saniya)){
    console.log("yes included");
}else{
    console.log("not included");
}

let array1 =["farooqui","shaikh","khan"];
let arrays = array1.push("syed","yadev")
console.log(array1);

let array2 = array1.pop()
console.log(array1);


let sofiya=["sofiya","saniya","alfiya","raisa","anis","arbaz","alam","yasin"];
let alfiya = sofiya.splice(3,0,"asif","muskan")
console.log(sofiya)

let raisa = sofiya.slice(1)
console.log(raisa);


let anis =sofiya.slice(1,5)
console.log(anis);
