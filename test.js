let string = "saniya"
let str ="farooqui"
let sub = "alfiya"

if(string == "saniya" || str == "saniya" || sub == "saniya"){
    console.log("saniya is present in");
}else {
    console.log("saniya is not there");
}

let a ="saniya"
switch(a){
    case string == a:
        console.log('saniya is present in string');
        break;
    case str == a:
        console.log("saniya is present in str ");
        break;
    case sub == a:
        console.log("saniya is present in sub"); 
        break;
    default:
        console.log("saniya is not there in any");
        break;           

}

let arr =["saniya","sofiya","alfiya","alam","yasin","arbaz"]

for(let response of arr){
    console.log(arr.indexOf(response) +":"+ response);
}

for(let i=0 ; i<10 ; i++){
    console.log(i);
}

for(let j= 0 ; j < arr.length ; j++){
    console.log(arr[j]);
}

let object ={"name" : "saniya" , "surname" : "farooqui" , "gender" : "female" ,"age" : 19 , "stream" : "bscit"};
for(let response in object){
    console.log(response +":"+ object[response]);
}

addition =(num1,num2,num3) =>{
    return num1+num2+num3;
}
let add = addition(11,10,78)
console.log(add);


function subtractonmethod (num1 ,num2,num3){
    return num1-num2-num3;
}
let subtraction = subtractonmethod(90,80,2)
console.log(subtraction);

let b ="arbaz"
let t  ="task"
if(b=="arbaz" && t =="task"){
    console.log("yes condition is met");
}else{
    console.log("no condition is met");
}

let name ="sofiya"
if(name != "saniya"){
    console.log("sofiya");
}else{
    console.log("saniya");
}



