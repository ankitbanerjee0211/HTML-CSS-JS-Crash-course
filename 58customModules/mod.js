console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// donating this function and something else as a object ;)
module.exports = {
    avg: average,
    name: "Ankit",
    roll: 10200719055
};