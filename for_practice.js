//loops practice 

//for loop

for (let i = 0; i < 10; i++){
    console.log(`my number is ${ i }`);
}

// while loop 
console.log("......................................");
let i = 0;
while(i < 10){
    console.log(`the number is ${ i }`);
    i++
}

//do while loop
console.log(".......................................");
let j = 0;
do{
    console.log(`this is ${j}`);
    j++
}while(j < 10);


//for of loop
console.log(".................................................");
let array = ['saniya','sofiya','alfiya','raisa','farooqui','anis','hakim','islam','aslam']
for(let response of array){
    console.log(response);
}

//for in loop 
console.log("................................................");
let saniya = {
    "firstname" : "saniya" , "lastname" : "farooqui" , "middlename" : "anisuddin"
}

for(let response in saniya){
    console.log(`${response}` + " : " + `${saniya[response]}`);
}

// function practice

function add(p1,p2,p3,p4){
    return p1 + p2 + p3 + p4;
}
let sana = add(90,80,77,67)
console.log(sana);

console.log("........................");

addition = (p1,p2,p3) => {
    return p1 + p2 + p3; 
}
let sofiya =addition(10,87,64)
console.log(sofiya);

for(let k = 0; k<10; k++){
    console.log(`the number is ${k}`);
}

let l = 0;
while(l < 10){
    console.log(`this is while loop number ${l}`);
    l++
}

let d = 0
do{
    console.log(`this is do while loop number ${d}`);
    d++
}while(d<10);

let sofiyaarray = ["saniya","alam","farhan","sana","alfiya","sofiya"];
for(let response of sofiyaarray){
    console.log(response);
}

let yasinarray = ["yasmin","yasin","nazreen"];
for(let response in yasinarray){
    console.log(response);
}

let object ={"firstname" : "saniya" ,"lastname" : "farooqui"}
 for(let response in object){
    console.log(`${response}` +':'+ `${object[response]}`);
 }
let m = 13;
if (m == 12){
    console.log("saniya");
}else if(m == 13){
    console.log("sofiya");
}else {
    console.log("not found");
}

let o = 17;
if (o >= 18){
    console.log(`then able to vote`);
}else {
    console.log(`then not able to vote`);
}

let q = 10;
if(q <= 15){
    console.log("can enjoy waterpark");
}else{
    console.log("sorry you are not allowed");
}

let u = 15;
switch (u) {
    case 1 :
        //block of code
        break;
    case 2 :
        //block of code
        break;
    case 15 :
        console.log("Yes");
        break;
    default :
        console.log("nothing was there");
}

    
//nested for in multiple case scenarios
let arrayblock = [["firstname"],["arbaz"],["lastname"],["khan"],["saniya"],["farooqui"]]

for(let i = 0 ; i < arrayblock.length ; i++){
    for(let j = 0 ; j < arrayblock[i].length ; j++){
        console.log(arrayblock[i][j]);
    }
}
