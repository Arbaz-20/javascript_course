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