// isEven
function isEven(num) {
    return num % 2 === 0;
}

// factorial
// factorial(6) 6 x 5 x 4 x 3 x 2 x 1
function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// kebab-to-snake
function kebabToSnake(str) {
// replace all '-' with "_"'s
var newStr = str.replace(/-/g , "_");
// return str
return newStr;

}