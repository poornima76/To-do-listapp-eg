let a=20;
console.log(a);
// alert("you're under attack!")
//0
let message = (sent)=>{
    console.log(sent);
};
message("Hello World");
//0
const valueSet =(pi)=>{
    console.log("value of pi is " + pi);
};
valueSet(3.14);

//1
let sum = (a,b) =>{
    let s = a === b? ((a+b)*(a+b)*(a+b)): (a+b);
    return s;
};
 add = sum(5,5);
 console.log(add);

//2
let check = (num)=>{
    if(num>0){
        if((num%3 == 0) || (num%7 == 0)){
            console.log("The number " + num + " divisible by 3 or 7")
        }
    }
}
check(7)

//3
const date = new Date();
console.log(date);

//4
let operation = (a,b)=>{
    console.log("The result of multiplication is: "+ (a*b));
    console.log("The result of multiplication is: "+ (a/b));
}
operation(4,5);

//5
const conversion = (T)=>{
    if(T>=0 && T<=100){
        let c =(5/9)* (T-32);
        console.log("The conversion of Fahrenheit to Celsius is: "+ c);
    } 
    // }else if(T){
    //     let f = (9/5)*c + 32;
    //     console.log("The conversion of Celsius to Fahrenheit is:  of multiplication is: "+ f); 
    // }
}
conversion(45);

