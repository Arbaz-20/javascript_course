//patterns of javascript
//square pattern

let p = 5
let string = "";
 for(let i = 0 ; i < p ; i++){
    for(let j = 0; j < p ; j++){
        string += "*";
    }
    string += "\n"
 }
console.log(string);

//hollow pattern

let n = 5
let hollow = "";
for(let i = 0; i<n; i++){
    for(let j = 0 ; j< n ; j++){
        if(i === 0 || i === n-1){
            hollow += "*";
        }else{
            
            if (j === 0 || j === n-1) {
                hollow += "*"               
            }else{
                hollow += " ";
            }
        }
    }
    hollow += "\n";
}
console.log(hollow);

let r = 5;
let right = "";
for (let i = 1; i <= r; i++) {
  for (let j = 0; j < r - i; j++) {
    right += " ";
  }
  for (let k = 0; k < i; k++) {
    right += "*";
  }
  right+= "\n";
}
console.log(right);

let l= 5;
let left  = "";
for (let i = 1; i <= l; i++) {
  for (let j = 0; j < i; j++) {
    left += "*";
  }
  left += "\n";
}
console.log(left);

let d = 5;
let down = "";
for (let i = 0; i < d; i++) {
  // printing star
  for (let k = 0; k < d - i; k++) {
    down += "*";
  }
  down += "\n";
}
console.log(down);

let h = 6;
let triangle = "";

for (let i = 1; i <= h; i++) {
  for (let j = 0; j < i; j++) {
    if(i === h) {
      triangle += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        triangle += "*";
      }
      else {
        triangle += " ";
      }
    }
  }
  triangle += "\n";
}
console.log(triangle);

let f = 5;
let data = "";
for (let i = 1; i <= f; i++) {
  for (let j = 1; j <= f - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    data += "*";
  }
  data += "\n";
}
console.log(data);

let v = 5;
let value = "";
for (let i = 1; i <= v; i++) {
  for (let j = 1; j <= v - i; j++) {
    value += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    value += "*";
  }
  value+= "\n";
}
console.log(value);


let s = 5;
let star = "";
for (let i = 1; i <= s; i++) {
  for (let j = 1; j <= s - i; j++) {
    star += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === s) {
      star += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        star += "*";
      }
      else {
        star += " ";
      }
    }
  }
  star += "\n";
}
console.log(star);


let o = 5;
let diamond = "";
for (let i = 1; i <= o; i++) {
  for (let j = o; j > i; j--) {
    diamond += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    diamond += "*";
  }
  diamond += "\n";
}
for (let i = 1; i <= o - 1; i++) {
  for (let j = 0; j < i; j++) {
   diamond += " ";
  }
  for (let k = (o - i) * 2 - 1; k > 0; k--) {
  diamond += "*";
  }
  diamond += "\n";
}
console.log(diamond);



