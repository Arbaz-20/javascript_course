//define array
//an array is a special variable, which can hold more than one value:

let array = ["arbaz","saniya","alfiya","sofiya","nazreen","nasreen","raza","ayush","asif"];
let size = array.length;
console.log(size);

let string = array.toString();
console.log(string);

let pop =array.pop();
console.log("This is the pop : ",array);

let push = array.push("anis")
console.log(array);

let appendvalue = array[array.length] = "alam"

let shift = array.shift()
console.log(array);

let unshift = array.unshift("arbaz khan")
console.log(array);

let deletevalue = delete array[2]
console.log(array);

let appendalfiya_again = array[2] = 'alfiya'
console.log(array);

let array2 = ["arbaz","saniya","alfiya"]
let arra3 = ["anis","gudiya phuppu","famida","danish"]

let concatinate = array.concat(array2,arra3);
console.log(concatinate);

let flat = [[1,2],[3,4],[5,6]]

let flatarray = flat.flat()
console.log(flatarray);