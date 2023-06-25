// to print any statement we console
console.log("saniya is a good girl");

//single line comment we use ("//")
//to define variable

//multiline comment 
/*arbaz
saniya
sofiya*/

//to define variable we use anyone of the following
//let   to define a variable whose value can be change
//const  to define a variable whose value can't be change
//var   to define variable

//let saniya = 10
//saniya = 20
//console.log("saniya");

const saniya1 = 10
console.log("this is from const :" , saniya1);

var arbaz = saniya1
console.log("this is from var :" , arbaz);

//variable defination 
let saniya

//variable declaration
saniya = "arbaz khan"
console.log("this is from let :" , saniya);

//template literal
console.log(`this is saniya she loves sleeping ${arbaz}`);
//to get information abt any variable  or string or object we use
console.info("saniya")

//operator in javascript
//addition operation
let saniya12 = 12 + 12
console.log("this addition is :" ,saniya12);

//subraction operation
let saniya13 = 12 - 12
console.log("this subraction is :" ,saniya13);


//multiplication operation
let saniya111 = 12 * 12
console.log("this multiplication is :" ,saniya111);

//divide operation
let saniya_divide = 12/12
console.log("this division is :" ,saniya_divide);

//remainder operation
let remainder = 12 % 12
console.log("this remainder is :" ,remainder);

// define object

let saniyafarooqui = {
    firstname:"saniya",
    lastname:"farooqui"
}

console.log("this is an objecr : " ,saniyafarooqui);

//define array

let saniyafarooqui786 = ["saniya","sofiya",12,true]


console.log("this is an array : " ,saniyafarooqui786);

//conditional operator

//if condition
let x = 5
if(x == 5){
    console.log("This is if condition value : ","Saniya");
}

//if else operator
let y = 6

if(y == 5){
    console.log("this is if else condition value : ","Saniya");
}else{
    console.log("this is if else condition value : ","Sufiya");
}

// if else if else condition operator

let z = 7

if(z == 4){
    console.log("THis is the if else if else condition value : ","Alfiya");
}else if(z == 5){
    console.log("THis is the if else if else condition value : ","Sufiya");
}else if(z == 7){
    console.log("THis is the if else if else condition value : ","Anis");
}else if(z == 2){
    console.log("THis is the if else if else condition value : ","raisa banu");
}else{
    console.log("THis is the if else if else condition value : ","Saniya");
}

// ternary operator (one line if else)
let r = 6

 r==5 ? console.log("This is saniya"):console.log("this is sufiya")

 //ternary operator (one line if else if else)
 let e = 5

 e == 5 ? console.log("ALFIYA") : e == 12 ? console.log("Sufiya") : console.log("SANIYA")


 //if operator on and condition ( && )

 let k = 1 , q = 1  // multiple variable decleration

 if(k == 1 && q == 2 ){ // both the condition should be satisfied for && operator if not then else part will be executes
    console.log("Saniya is good girl");
 }else{
    console.log("Saniya is bad girl");
 }

 //if operator on or condition (||)

 let a = 11 ,b = 25

 if(a == 11 || b == 23){ // atleast one condition should be satisfied for || operator 
    console.log("true");
 }else{ 
    console.log("false");
 }

 //if operator for not condition 
 let we = null
 
 if(we != 23){
    console.log("saniya not operator");
 }else{
    console.log("sufiya not operator");
 }

 if(we){
    console.log("sufiya");
 }else{
    console.log("alfiya");
 }