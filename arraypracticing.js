let saniyaarray = ["saniya","sofiya","alfiya","raisa","anis"]
let length = saniyaarray.length
console.log(length);

let string = saniyaarray.toString()
console.log(string);

let pop = saniyaarray.pop()
console.log(saniyaarray);

let push = saniyaarray.push("anis")
console.log(saniyaarray);

let shift = saniyaarray.shift()
console.log(saniyaarray);

let unshift = saniyaarray.unshift("saniya")
console.log(saniyaarray);

let drop = delete saniyaarray[3]
console.log(saniyaarray);


let append = saniyaarray[3] = 'raisa'
console.log(saniyaarray);

let array = ["saniya","anisa","rano","sofiya"]
let array1 = ["alfiya","sakina","hera"]

let concat = array.concat(array1)
console.log(concat);

let flat = [[1,2],[3,4],[5,6]]
let flattend = flat.flat()
console.log(flattend);

let map = ["arbaz","ayush","yasin","asif","aman"]
let empty = []
map.map((Element)=>{
    empty.push(Element)    
});
console.log(empty);

let sofiya=["sofiya","saniya","alfiya","raisa","anis","arbaz","alam","yasin"];
let alfiya = sofiya.splice(3,0,"asif","muskan")
console.log(sofiya)

let raisa = sofiya.slice(1)
console.log(raisa);
