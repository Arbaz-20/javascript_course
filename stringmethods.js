//define string
//string are for storing and manipulating text;

let name = "  Saniya_Farooqui_Anisuddin   "
console.log(`the length of the name is :`+ name.length);

let text = "lets play       "
let text1 = text.trim();
console.log("this is trim :",text1);

let trimdataStart = name.trimStart()
console.log("the start trim data is : ",trimdataStart.length);

let text2 = "apple , banana , kiwi";
let part = text2.slice(7);
console.log("the slice is :",part);

let part1 = text2.substring(7,14);
console.log("the substring is :",part1);

let parts = text2.substr(7,7);
console.log("the substr is :",parts);

let text3 = "i am in school";
let data = text3.replace("school","college");
console.log("the new text is :",data);

let replacetext = "arbaz is going to work very hard and arbaz is strong"
let replcedata = replacetext.replaceAll("arbaz","saniya")
console.log("--------------------------------"+replcedata+"-----------------------------------------");

let stringvalue = "arbaz and saniya are learning frontend"
let splitvalue = stringvalue.includes("saniya")
if (splitvalue == true){
    console.log("this is true:", splitvalue);
}else{
    console.log("this is false:",splitvalue);
}

switch(splitvalue){
    case true:
        console.log("this is true ",splitvalue);
        break;
    case false:
        console.log("this is false" , splitvalue);
        break;
    default:
        console.log("not found");

}

let string1= "saniya"
let string2 = "farooqui"
let strings = string1.concat(" ",string2)
console.log(strings);


let array = ["saniya", "arbaz", "sofiya", "alfiya", "raisa"];
for(let response of array){
    console.log(array.indexOf(response)+`:`+ response);
}


let string = "Saniya farooqui"
let char = string.charAt(0);
console.log(char);

let chars = string.charCodeAt(0)
console.log(chars);


let stringsplit = "arbaz saniya alfiya sufiya alam"
let value = stringsplit.split(" ")
console.log(value);

let commastring = "arbaz,saniya,lol"
let commavalue = commastring.split(",")
console.log(commavalue);

let pipingstring = "arbaz | string | sufiya"
let pipingvalue = pipingstring.split("|");
console.log(pipingvalue);

