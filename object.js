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

