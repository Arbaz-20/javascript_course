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
