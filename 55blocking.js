// Synchronous or Blocking
// - line by line execution

// Asynchronous or Non-Blocking execution
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("54text.txt", "utf-8", (err, data)=>{
    console.log(data);
});
// (error, data)
// it only executes when the whole reading operation is done - Callback
// if we had used readFileSync then it will be a synchronous function and it'll be executed line by line like 54nodeJsModules.js
console.log("This is a message");