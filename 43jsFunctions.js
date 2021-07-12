console.log("This is from external js file");

let name1 = "Ankit";
let name2 = "Arnab";
let name3 = "Sarbo";
let name4 = "Puspak";
// console.log(name1 + " is a good boy.");
// console.log(name2 + " is a good boy.");
// console.log(name3 + " is a good boy.");
// console.log(name4 + " is a good boy.");

let greetText = "Good Morning ";
function greet(name, greetText="Good Night "){
    console.log(greetText + name);
}

greet(name1, greetText);
greet(name2);
greet(name3, greetText);
greet(name4);
let returnVal = greet(name4);
// console.log(returnVal);
// This value is undefined because the function greet does not return a value

function sum(a, b, c){
    let d = a + b + c;
    // block variable
    return d;
    // anthing written after return is not executed(Unreachable code)
    
}

sum(1, 2, 3);
// this will not give any response because it is not printing anything into the console
let result = sum(5, 7, 8);
console.log(result);
