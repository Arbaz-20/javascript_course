let object ={"name" : "saniya","middle name" :"anisuddin", "surname" : "farooqui","age" :18};
 for(response in object){
    console.log(response +":"+ object[response]);
 }

let arr = ["name","husband","children"]
let array = ["raisa","anis","Sofiya"]
let arrayobj =[]
let obj ={}

for(i = 0 ; i< 3 ; i++){
    obj[`${arr[i]}`] = array[i]
    arrayobj.push(obj) 
}

console.log(arrayobj);

let value ={
    "hobbies" : "writnig",
    "college" : "sophia"
}
value.age = 18
value.name ="saniya"
value.surname = "farooqui"
console.log(value);

for(response in value){
    console.log(response + ":" + value[response]);
}