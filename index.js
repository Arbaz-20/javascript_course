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

 let have = 9152

if(have == 9152){
    console.log("saniya have started learning javascript");
}else{
    console.log("she don't even started learning");
} 

let i = 99 , j = 90

if(i == 99 && j == 789){
    console.log("saniya farooqui");
}else{console.log("sofiya farooqui");
}

let l = "farooqui" , m = 800

if (l == "farooqui" || m == 800){
    console.log("arbaz");
}else{
    console.log("nahil");
}

let n = 17

if(n != 20){
    console.log("it works");
}else{
    console.log("it doesnot work");
}


//comparison operartor
// the value of any variable or object or any array any thing which is getting compare is called comparision operator
let arbaz1 = 10

//greater than
if(arbaz1 > 10){
    console.log("yes he is greater");
}else{
    console.log("No not greater");
}

//less than
if(arbaz1 < 10){
    console.log("less");
}else{
    console.log("more");
}

//greater then equal to
if(arbaz1 >= 10){
    console.log("yes greater than equal to");
}else{
    console.log("No greater than equal to");
}

//less than equal to
if(arbaz <= 9){
    console.log("arbaz is less");
}else{
    console.log("arbaz is greater");
}

// === triple equal to 
if(arbaz1 === 10){
    console.log("yes it is");
}else{
    console.log("no it is");
}

let t = typeof(arbaz1)
console.log(t);


//switch case 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//functions in javascript
function saniya_farooqui(value_1, value_2,value3,value_4){
    //console.log("This is the addition of new number : ",value_1+value_2);
    let add = value_1 + value_2 + value3 + value_4
    return add;
}
let addition = saniya_farooqui(1,12,12,12);
console.log("the addition is : ",addition);

//arrow function

arbazfunction = (value12,value13,value14,value15) => {
    let subtract = value12 - value13 - value15 - value14
    return subtract;
}
let sub = arbazfunction(78,1,9,2)
console.log("the subtract is : ",sub);

//switch case 

let s = 33;

switch(s){
    case 20:
        s = "twenty"
        break;
    case 33:
        s = "farooqui"
        break;
    default:
        s = "not found"
        break;
}
console.log(`the value is Saniya ${s}`); 

function add(p1 ,p2, p3){
    return p1+p2+p3;
}
let saba = add(1,2,7)
console.log(`the addition is ${saba}`);

// sub = (p1,p2,p3)=> {
//     return p1 - p2 - p3;
// }
// let sadaf = sub("arbaz",10,5)
// console.log(`the subraction is ${sadaf}`);
addition = (a,b,c) => {
    try {
        let add = a + b + c
        throw Error;
        //console.log("This is the error :",add);
        return add;
    } catch (error) {
        console.log("this is the error",error.message);
    }
}

let addition_num = addition(undefined,2,3);
console.log(addition_num);


//loops is define as a feature used to execute a particular part of the program repeatedly if a given condition evalutes to be true.

// there are two loops
//1 while loop this is for loops through a block of code as long as a specified condition is true.

//while(condition) {
    //code block to be executed
//}

//2 for loop is for that how many time you want to loop through a block of code.

//for(statement1; statement2; statement3){
    // code block to be executed
//}

//let try function 
function alfiyamethod(p1,p2){
    return p1+p2
}
let alfi = alfiyamethod(89,90);
console.log(alfi);

const sofiyamethod = (p1,p2) =>{
    return p1 - p2
}
let saima = sofiyamethod(90,60)
console.log(saima);

// for loop 
for( let i = 0; i <= 10 ; i++){
    console.log(i);
}

arbazarray = ["arbaz","saniya","alfiya","sufiya"]
console.log(arbazarray.length);
for(let i = 0; i < arbazarray.length;i++){
    console.log(arbazarray[i]);
}

//while loop
let arbazkhan1 = 0
let text = ""
while(arbazkhan1 < 10){
    text = "The text number is " + arbazkhan1;
    console.log(text);
    arbazkhan1++;
}
console.log("----------------------------------------------");

//do while loop
let arbazkhan2 = 0;
do{
    text = "the saniya number is :"+arbazkhan2;
    arbazkhan2++
    console.log(text)
}while(arbazkhan2 < 10);

//loops by saniya 
for (let g = 0; g < 10; g++){
    console.log(g);
}

let d=0;
while (d < 10){
    console.log(`this is while loop ${d}`);
    d++
}

//for of loop

arbazarray2 = ["arbaz","saniya","sufiya","alfiya","alam","imran","ariba","nazneen","asif","ayesha"]
//console.log(arbazarray2.indexOf("arbaz"));
for(let response of arbazarray2){
    console.log(arbazarray2.indexOf(response)+" : "+response);
}

//for loop practice

for ( r = 0; r < 20; r++){
    console.log(r);
}

//while loop practice

let c = 0;

while (c < 20){
    c++
    console.log(`the number is ${c}`);
}

// do while loop practice

let h = 0;
do{
    h++
    console.log("the number of do while is :" +h);
}while(h < 20);

//for of practice

saniyaarray = ['saniya','rifat','ishrat','aamna','sofiya','alfiya','asad','ahad','shifa','raisa']
for(let response of saniyaarray){
    console.log(saniyaarray.indexOf(response)+" : "+response);
}

let hamza = 900;
if(hamza == 800){
    console.log(`hamza`);
}else if (hamza== 900){
    console.log("sofiya");
}else {
    console.log("alfiya");
}

if(hamza > 700){
    console.log("yes");
}else {
    console.log("no");
}

if(hamza < 700){
    console.log("yes");
}else{
    console.log("no");
}

if (hamza >= 900){
    console.log("yes this is right");
}else{
    console.log("no this is wrong");
}

if(hamza <= 800){
    console.log("its okay");
}else{
    console.log("u r also wrong");
}

let sofiyaarray = ["saniya","sofiya","alfiya","raisa","anis","hakim","islam"];

for(let response of sofiyaarray){
    console.log(sofiyaarray.indexOf(response) + ":"+ response );
}




































































