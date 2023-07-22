let finalArray = []
let nameArray = []

let key = ["name","surname","age","qualification","gender","email"]
let value =[["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"]]

for(let response of value){
    //console.log(response);
    let object = {}
    for(let i = 0; i < value.length; i++){
        object[`${key[i]}`] = response[i]
        delete object.age
    }
    finalArray.push(object)
}
console.log(finalArray);


let saniya = {
    name : "saniya",
    surname : "farooqui",
    age:17
}
delete saniya.age
console.log(saniya);

//nested object

let arbaz = {
    name:"Arbaz",
    surname:"Khan",
    age:21,
    saniya:{
        name:"Saniya",
        surname:"Farooqui",
        age:17
    },
    alfiya:{
        name:"Alfiya",
        surname:"Farooqui",
        age:21,
    }
}

arbaz.saniya["name"] = "sofiya"
arbaz.saniya["age"] = 19
console.log(arbaz);
console.log(arbaz.saniya);
console.log(arbaz.alfiya);


let Allkey = ["name","surname","age","qualification","gender","email"]
let Allvalue =
    [ 
        [
            ["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],
            ["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],
            ["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],
            ["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],
            ["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"],
            ["Arbaz","Khan",21,"Graduation","Male","arbaz@gmail.com"]
        ]
    ]
let allobject =[]
let values = Allvalue.flat()        
console.log("Ths is the value ",values);

for(response of values){
    let object ={}
    for(i = 0 ; i<values.length ; i++){
    object[`${Allkey[i]}`]= response[i]
    }
    allobject.push(object)
}

console.log(allobject);

//nested array and object

let object ={
    name : "saniya",
    surname : "farooqui",
    age : 17,
    myobj : [
       { name : "alfiya", surname: "farooqui"},
       {name :"sofiya" , surname: "farooqui" }
    ]
}
let array =[]
let x = ''

for (let i in object.myobj) {
   x +=  object.myobj[i].name ;
  for (let j in object.myobj[i].surname) {
    x += object.myobj[i].surname[j];
  }
  array.push(x)
}

//console.log(array);

let arrkey = ["name","surname","age"]
let arrvalue = [["saniya","farooqui",17],["saniya","farooqui",17],["saniya","farooqui",17]]
let arr =[]

for(response of arrvalue){
    let object ={}
    for(i=0 ; i<response.length ; i++){
        object[arrkey[i]]= response[i]
    }
    arr.push(object)
}
console.log(arr);



let data =["alfiya","farooqui",21]
if(data != "raisa"){
    console.log("true");
}else{
    console.log("false");
}
 let arrdata = data.indexOf("anisuddin")
 console.log(arrdata);

let arraydata = data[3]="anisuddin"
//console.log(data);

let obj = {
    name:"Arbaz",
    surname:"Khan"
}
let saniyaobj = {
    name:"Saniya",
    surname:"Farooqui",
    ages1:32
}
let sufiyaobj = {
    name:"Sufiya",
    surname:"Farooqui",
    age:20
}

let concat = Object.assign(obj,{saniyaobj,sufiyaobj})
console.log(concat);

function arbazkhan12 (name,age,surname){
    this.name = name,
    this.age = age,
    this.surname = surname
}

let arbazvalue = new arbazkhan12("arbaz",21,"khan")
console.log(arbazvalue);


let keys_of_object = Object.keys(concat)
console.log(keys_of_object);

let values_of_object = Object.values(concat)
console.log(values_of_object);

let enteries = Object.entries(concat);
console.log(enteries);

let get = Object.getOwnPropertyDescriptors(concat,"name");
console.log(get);

let defineobject = {name:"Arbaz",surname:"Khan"}
Object.defineProperty(defineobject,"name",{writable:false});
defineobject["name"] = "sufiya"
console.log(Object.getOwnPropertyDescriptors(defineobject));
console.log(defineobject);

Object.preventExtensions(defineobject);
defineobject.age = 22
console.log(defineobject);