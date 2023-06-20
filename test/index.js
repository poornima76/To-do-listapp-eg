// Using var 
var a = '123';
console.log(a);

//Using let
let b = 456;
console.log(b);

const c = 789;
console.log(c);
// alert('hello');
// let age = prompt('How old r u?');
// console.log(age);
// const isOld = confirm("R u old?");
// console.log(isOld);

// if syntax:

let x = 1;
const y = 2;
if (x ==1){
    console.log('x is 1');
}
if(x ===1 && y === 2){
    console.log("&& operator tested");
}

if ((x = 1) || (y = 3)){
    console.log('|| operator tested');
}
if(x != 2){
    console.log("not check");
}
if(x === 1){
    console.log("x is 1");
}
else{
    console.log("Not 1");
}
// ternary operator
let result = x === 1? "x is 1" : "x is not 1";

for(let i=0; i<10; i++){
    console.log("Kitty cat");
}
// ES5 way
// function add(a,b){
//     console.log(a+b);
// }
//ES6 way
const add =(a,b) =>{
    console.log(a+b);
};
add(2,3);

const person = {
    fn: 'Poooh',
    ln: 'nim',
    fullName: () =>{
        // return person.fn + " "+ person.ln;
        return `${person.fn} ${person.ln}`;  // `` is used to populate the ${} 
        // falls under repl
    },
};
// two ways to access the properties of the object
console.log(person.fn);
console.log(person['fn']);

const nam = person.fullName();
console.log(nam);

// const arr = [];
// const arr = new Array();
cars = ['Saab','Volvo', 'BMW', 46, {name: 'Alto', company:'Suzuki'}];
let fcar = cars[0];
console.log(fcar);
