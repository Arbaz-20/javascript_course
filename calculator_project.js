function addition(p1,p2,p3){
    return p1+p2+p3;
}

function subraction(p1,p2,p3){
    return p1 - p2 - p3;
}

function multiplication(p1,p2,p3){
    return p1 * p2 * p3
}

function division(p1,p2){
    return p1/p2
}

function remainder(p1,p2){
    return p1 % p2
}

 let add = addition(19,20,30)
 console.log(`the addition is ${add}`);

 let sub = subraction(60,10,5)
 console.log(`the subraction is ${sub}`);

 let multiple = multiplication(9,5,33)
 console.log(`the multiplication is : ${multiple}`);

 let divide = division(93,3)
 console.log(`the division is ${divide}`);

 let remain = remainder(70,3)
 console.log(`the remainder is ${remain}`);

 let saniyaarray = ['saniya', 'alfiya', 'sofiya','arbaz','sara','ali','anis','sana']
 for (let response of saniyaarray){
    console.log(saniyaarray.indexOf(response) +" : "+ response);
 }

 for (let i = 0; i < 10; i++){
    console.log(i);
 }

 let i = 0;
 while(i < 10){
    console.log(i);
    i++
 }

 let j = 0;
 do{
    console.log(`saniya at number : ${j}`);
    j++
 }while(j<10);

//for in
console.log("--------------------------------------------------------------");
let arbaz = {
    "firstName":"arbaz","lastName":"khan"
}

for(let response in arbaz){
    console.log(`${response}`+" : "+`${arbaz[response]}`);
}


