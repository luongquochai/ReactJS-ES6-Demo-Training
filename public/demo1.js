  ReactDOM.render(<h1>REACTJS ES6 </h1>,
    document.getElementById('root'));

class Person{
  constructor(name, age){
    this.age = age;
    this.name = name;
  }
  sayHello(){
    return 'Hello Word' + this.name + ': ' + this.age;
  }
}

class Child extends Person{
  constructor(name,age,hobby){
    super(name,age);
    this.hobby = hobby;
  }
  sayHello(){
    return 'Xin chao, em ten: '+ this.name + this.age + this.hobby ;
  }
}

var p1 = new Person('QuocHai','21');
var aChild = new Child('Duy',3, 'hut can');
console.log(p1);
console.log(aChild);
console.log(p1.sayHello());
console.log(aChild.sayHello());
