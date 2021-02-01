class Parent{
    constructor(){
        this.fatherName = 'Md.Motiur Rahman'
    }


}

class Baby extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + " "+ this.fatherName;
    }
}

const baby1 = new Baby('asif');
const baby2 = new Baby('sakib');
console.log(baby1);
console.log(baby2);
console.log(baby1.getFullName());
console.log(baby2.fatherName);
console.log(baby2.getFullName());




//example from wc3 school

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
  console.log( mycar.show());