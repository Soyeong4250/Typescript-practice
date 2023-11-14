function Person(name, age) {
  this.name = name;
  this.age = age;
}

var captain = new Person('캡틴', 100);
captain instanceof Person;  // true

var hulk = {name: '헐크',  age: 79};
hulk instanceof Person;  // false