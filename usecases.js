let arbaz = "Arbaz Khan"

CheckIfExist = (arbaz) => {
    let value = arbaz.split(" ")[1]
    if(value === "Khan"){
        console.log("Khan is present in ",arbaz);
    }else{
        console.log("Khan is not present in ",arbaz);
    }
}
CheckIfExist(arbaz);

console.log("-------------------------------------------------------------------------------------------------------------------------");

let saniya = {
    name : "Saniya",
    surname:"Shaikh",
    age:21,
}

function isSaniyaExist(value) {
    let saniya = value
    if(saniya.surname == "Farooqui"){
        console.log("Yes her surname is "+"Farooqui");
    }else{
        console.log("No her surname is not"+" Farooqui");
    }
}
isSaniyaExist(saniya);

console.log("------------------------------------------------------------------------------------------------------------------------");

let saniyarray = ["Saniya","Saniya","Alfiya","Sufiya","Alam","arbaz","sana"]

let CheckIfArray = (array) => {
    let saniya = array
    if(saniya.length > 0){
        saniya.forEach(element => {
            console.log(saniyarray.indexOf(element) +" : "+ element);
        });
    }else{
        console.log("No value exist in array");
    }
}
CheckIfArray(saniyarray)

console.log("----------------------------------------------------------------------------------------------------------------------------");

let key = ["name","age","surname","email","phonenumber"]
let value = [["Saniya",21,"Farooqui","saniya@gmail.com",987612345],["Saniya",21,"Farooqui","saniya@gmail.com","987612345"],["Saniya",21,"Farooqui","saniya@gmail.com","987612345"],["Saniya",21,"Farooqui","saniya@gmail.com","987612345"]]

ArrayOFObject = (keyArray,valueArray) => {
    let finalObject = {}
    let array = [];
    if(keyArray == "" || keyArray.length <= 0 || valueArray == "" || valueArray.length <= 0){
        console.log("One of the array in empty");
    }else{
        for(let response of valueArray){
            let object = {}
            for(let i=0; i < value.length ; i++){
                object[`${keyArray[i]}`] = response[i] 
            }
            array.push(object);
        }
        finalObject.count = array.length
        finalObject.rows = array
        console.log(finalObject);
    }
}
ArrayOFObject(key,value);

console.log("---------------------------------------------------------------------------------------------------------------------");

let saniyaset = new Set(saniyarray)
console.log(saniyaset);

let saniyamap = new Map()
console.log(saniyamap);


let hash = new Map(Object.entries(saniya))
console.log(hash);
console.log(hash.size);