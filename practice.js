let saniya ={'first name' : 'saniya' , 'lastname' : 'farooqui'}
for(let Response in saniya){
    console.log(Response +":"+ saniya[Response]);
}

let array = ["saniya","sofiya","alfiya"]
for(let reponse of array){
    console.log(array.indexOf(reponse)+":"+ reponse);
}

let string = "saniya"
let strings = "farooqui"
if(string == strings){
    console.log("they are same"); 
}else{
    console.log("they are not same");
}

let a = 10 , b = 90;
if(a>b){
    console.log("it is greater");
}else{
    console.log("it is not greater");
}

string1 = string.concat(strings)
console.log(string1);

replace = string.replace("saniya","sofiya")
console.log(replace);
 
str = replace.concat(strings)
console.log(str);

let arr = ["saniya","sofiya","alfiya","raisa","anis","arbaz","yasin"]
if(arr.includes("sofiya")){
    console.log("yes it is there");
}else{
    console.log("no it is not there");
}

let s = 60;
switch(s){
    case 90:
        s = "ninety"
        break;
    case 80:
        s ="eighty"
        break;
    case 70:
        s ="seventy"
        break;
    case 60:
        s = "sixty"
        break;
    default:
        s ="not found"
        break;        
}
console.log(s);

function add(p1,p2,p3){
    return p1+p2+p3
}
let addition = add(2,3,4);
console.log(addition); 

sub = (p1 ,p2) => {
    return p1-p2
}
let subraction = sub(90,45)
console.log(subraction);

let i = 0
while(i < 10){
    console.log(i);
    i++
}
console.log(".................................");

let n = 0
do{
    console.log(n);
    n++
}while(n<10)
