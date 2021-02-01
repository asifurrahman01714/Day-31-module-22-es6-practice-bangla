// const declaration

const names = ['shofi', 'mofi'];
names[0] = 'mafiul';// change of one specifiq value  is possible
names.push(13);
console.log(names);

const ovjectName = {name: 'asif', phone: 1212};
ovjectName.name = 'sakib';
console.log(ovjectName);

// but this is not possible to change the full array names = ['rafi', 'kafi']; 



//var can be accessed from anywhere..like outside of array

let sum = 0;
for (var i=0; i <10; i++) {
   sum = sum + i;
   console.log(sum);
   console.log(i);
}
console.log(i);// the var i is licked


//but let always works as scope variable...not will be licked

let jogFol = 0;
for (let j = 0; j < 10; j++) {
    jogFol = jogFol + j;
    console.log(j);
    console.log(jogFol);
}

console.log(j);//not possible