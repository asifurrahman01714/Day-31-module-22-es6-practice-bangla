//concatanation of array

const ages1 = [12,23,13]
const ages2 = [23,12,23]
const ages3 = [12,23,34]
const totalAge1 = ages1.concat(ages2);
console.log(totalAge1);

const totalAge2 = totalAge1.concat(ages3)
console.log(totalAge2);

const totalAge3 = totalAge1.concat([599]).concat(ages3)
console.log(totalAge3);

//with ES6

const totalAgeES6 = [...ages1, ...ages2, 599, ...ages3];
console.log(totalAgeES6);

//Math.max()

const business = 650;
const marketting = 343;
const webDeveloper = 232;
const maximum = Math.max(business, marketting, webDeveloper);
console.log(maximum);

const takaPoisha = [121,2323,5335,4234];
const resultTakaPoisha1 = Math.max(takaPoisha);
console.log(resultTakaPoisha1);

const resultTakaPoisha2 = Math.max(...takaPoisha);
console.log(resultTakaPoisha2);