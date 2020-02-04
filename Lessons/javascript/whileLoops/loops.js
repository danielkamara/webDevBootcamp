console.log("Printing all numbers between -10 & 19");
var num = -10;

while(num <= 19) {
    console.log(num)
    num++;

}

console.log("Printing all even numbers between 10 & 40");
var num = 10;

while (num <= 40) {
    console.log(num);
    num+=2;

}


console.log("Printing all odd numbers between 300 & 333");
var num = 300;

while (num <= 333) {
    if(num % 2 !== 0){
    console.log(num);
    }
    num += 1;

}

console.log("Printing all numbers divisible by 5 & 3, between 5 & 50");
var num = 3;

while (num <= 50) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log(num);
    }
    num += 1;

}