// Built in Modules of NodeJS

const fs = require("fs");

//READING A FILE
let text = fs.readFileSync("54text.txt", "utf-8");
// (file name, character set)

console.log("The content of the file 54text.txt is:")
console.log(text);

// REPLACING
text = text.replace("Lorem", "Ankit");
// and making a new file out of it
fs.writeFileSync("54ankit.txt", text)
// (link, and the content to make)
// if the file doesn't exist then it'll be made

console.log("The content of the file 54ankit.txt is:")
console.log(text);