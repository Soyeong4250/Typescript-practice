interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  skill: string;
}

// function introduce(someone: Person | Developer) {
//   console.log(someone.name);
// }

function introduce(someone: Person | Developer) {
    if ('age' in someone) {  // Person 타입으로 간주
        console.log(someone.age);
        return;
    }

    if ('skill' in someone) {  // Developer 타입으로 간주
        console.log(someone.skill);
        return;
    }
}