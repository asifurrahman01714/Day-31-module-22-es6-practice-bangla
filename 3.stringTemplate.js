// string concatanation

const firstName = "asif ur";
const lastName = 'rahman';
const fullName = firstName + " " + lastName; // without ES6
console.log(fullName);


const fullNameWithEs6 = `${firstName} ${lastName} is a good boy . His total marks is ${20+30}`; // with ES6
console.log(fullNameWithEs6);


//Multiline 

const multiline = "I Love you"
                +"I need you";
console.log(multiline);


const multilin1 = "I Love you \n"
                +"I need you";
console.log(multilin1);  


const multilineES6 = `I love you
I need you`
console.log(multilineES6); // Multiline with ES6