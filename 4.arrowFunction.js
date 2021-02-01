//withoutArrow function
function withoutArrow(x,y) {
    return x+y;
}
console.log(withoutArrow(2,2));

//without arrow function as expression

const withoutArrow1 = function wihtoutArrow(x,y) {
    return x+y;
}
console.log(withoutArrow1(2,3));


//with arrow function

const arrow1 = x => x*2;
console.log(arrow1(2));


const arrow2 = (x,y) => x+y;
console.log(arrow2(3,3));


const arrow3 = (x,y) =>{
    const sum = x+y;
    const difference = x-y;
    return sum * difference;
}
console.log(arrow3(3,2));