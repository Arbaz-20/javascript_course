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

console.log(array);
