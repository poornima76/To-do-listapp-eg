// // Using var 
// var a = '123';
// console.log(a);

// //Using let
// let b = 456;
// console.log(b);

// const c = 789;
// console.log(c);
// alert('hello');
// let age = prompt('How old r u?');
// console.log(age);
// const isOld = confirm("R u old?");
// console.log(isOld);

// if syntax:

// let x = 1;
// const y = 2;
// if (x ==1){
//     console.log('x is 1');
// }
// if(x ===1 && y === 2){
//     console.log("&& operator tested");
// }

// if ((x = 1) || (y = 3)){
//     console.log('|| operator tested');
// }
// if(x != 2){
//     console.log("not check");
// }
// if(x === 1){
//     console.log("x is 1");
// }
// else{
//     console.log("Not 1");
// }
// // ternary operator
// let result = x === 1? "x is 1" : "x is not 1";

// for(let i=0; i<10; i++){
//     console.log("Kitty cat");
// }
// ES5 way
// function add(a,b){
//     console.log(a+b);
// }
//ES6 way
// const add =(a,b) =>{
//     console.log(a+b);
// };
// add(2,3);

// const person = {
//     fn: 'Poooh',
//     ln: 'nim',
//     fullName: () =>{
//         // return person.fn + " "+ person.ln;
//         return `${person.fn} ${person.ln}`;  // `` is used to populate the ${} 
//         // falls under repl
//     },
// };
// two ways to access the properties of the object
// console.log(person.fn);
// console.log(person['fn']);

// const nam = person.fullName();
// console.log(nam);

// const arr = [];
// const arr = new Array();
// const cars = ['Saab','Volvo', 'BMW', 46, {name: 'Alto', company:'Suzuki'}];
// let fcar = cars[0];
// console.log(fcar);
// const d = cars[cars.length-1];
// console.log(cars.sort());
// console.log(cars.push('Porshe'));
// console.log(cars);
// console.log(cars.pop());
// const myFunction = (data) =>{
//     console.log(data);
// }
// //ES 6
// cars.map(d=> console.log(d));


// User model
const user = {
    firstName: 'john',
    lastName: 'doe',
    email: "abc@gmail.com",
    address: 'chabahil',
    password: 'dwjidwjds',
    phone : 98927827
};

// User list
const{ password, phone, ...rest} = user;
console.log({rest});
//Output:

// {
//     rest: {
//       firstName: 'john',
//       lastName: 'doe',
//       email: 'abc@gmail.com',
//       address: 'chabahil'
//     }
//   }

const arra = ['saab', 'volvo', 'bmw'];
const [first, ...other] = arra;
console.log(other.toString());

const myFunction = (data) => {
    console.log("Hi there ", data);
};
arra.map(myFunction).toString();


