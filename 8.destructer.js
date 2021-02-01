const student = {
    name :'asif',
    id : 17702062,
    school :'shankharigati school',
    zilla :'jessore',
    phone : 017121212121,
    info:{
        tax: 232234,
        income: 213213
    }
}

const {name, phone} = student;
console.log(name, phone);

const  {tax,income} = student.info;
console.log(tax, income, income);

const friends = [12,34,45,34,45];
const [first, ...rest]= friends;
console.log(first);
console.log(rest);