interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
  age: string;
}

interface Hero {
  name: string;
  nickname: string;
}

function isPerson(someone: Person | Developer | Hero): someone is Person {
  return typeof (someone as Person).age === 'number';
} 

function isDeveloper(someone: Person | Developer | Hero): someone is Developer {
  return typeof (someone as Developer).age === 'string';
}

function greet(someone: Person | Developer | Hero) {
  if(isPerson(someone)) {
    console.log("사람의 나이는 : " + someone.age);
  } else if(isDeveloper(someone)){
    console.log("개발자의 역량은 : " + someone.skill);
  }
}
