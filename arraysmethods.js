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


let maparray = ["arbaz","saniya","alfiya","sufiya"]
let emptyarray = []
maparray.map((element)=>{
    emptyarray.push(element);
});
console.log("This is the empty array",emptyarray);

let numberarray = [1,2,3,4,5,6,7,8,9]

let answer = numberarray.map(element => element + 30);
console.log(answer);

let data = maparray.filter(element => element == "arbaz")
console.log(data);

let number = [1,2,3,4,5,6,7,8,9,10]
let alphabet = ["a","b","c","d","e","f","g","h","i","j"]
descend = number.sort((a,b)=> a > b ? 1 : -1);
console.log(descend);

ascend = alphabet.sort((a,b) => a > b ? -1 : 1);
console.log(ascend);

let arrays = [1,2,3,4]
arrays.forEach((element) => {
    console.log(element);
});


let note = ["saniya","alfiya","sofiya"]
let book = ["raisa","anis"]
let notebook = book.concat(note)
console.log(notebook);

let arr = [1,2,3,4,5,6,7,8,9]

let greater = arr.every((num) => num >= 1)
console.log("this is greater every" ,greater);

let lesser = arr.every((num) => num < 10)
console.log("this is lesser every ",lesser);

let greatersome = arr.some((num) => num > 4)
console.log( "this is greater some ",greatersome);

let includes = [1,2,3,4,5,6]
console.log(includes.includes(2));

reverse = includes.reverse();
console.log(reverse);

let arrays1 = new Array(8); 
console.log(arrays1);
console.log(arrays1.fill(8));

let farooqui = ["s","a","n","i","y","a"]
console.log(farooqui.join(''));

let reduce = [1,2,3,4,5,6]
let reduces =reduce.reduce((total , current) => total+current)
console.log(reduces);

let find = [1,2,3,4,5,6,7,8,9,10]
let found = find.find((element) => element > 4)
console.log(found);



