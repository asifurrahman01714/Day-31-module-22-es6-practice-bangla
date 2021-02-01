//without backup

function add0(num1, num2) {
    return num1 + num2;
}

console.log(add0(10,20));;
console.log(add0(10));; //backup is not  working



// backup type one

function add1(num1, num2) {
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
console.log(add1(10,20));;
console.log(add1(10));; //backup is working


//backup type two

function add2(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}

console.log(add2(10,20));;
console.log(add2(10));; //backup is working




// backup type three
function add3(num1, num2 = 0) {
    return num1 + num2;
}

console.log(add3(10,20));;
console.log(add3(10));; //backup is working