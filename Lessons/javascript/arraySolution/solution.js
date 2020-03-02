console.log("This is for printReverse()");

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse(["a","b","c","d","e","f"]);


console.log("This is for isUniform()");
console.log("Write the function for isUniform() in the console to check the code");

function isUniform(arr) {
    var first = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        } 
    }
    return true;
}


console.log("This is for sumArray()");
console.log("Write the function for sumArray() in the console to check the code");

function sumArray(arr) {
var total = 0;
arr.forEach(function(element) {
    total += element;
});
return total;
}

console.log("This is for max()");
console.log("Write the function for max() in the console to check the code");

function max(arr) {
var max = arr[0];
for(var i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i]
    }
}
return max;
}