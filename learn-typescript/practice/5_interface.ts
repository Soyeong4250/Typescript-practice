interface Person {
  name?: string;
  age: number;
}

function getPerson(someone: Person): Person {
  return someone;
}

let hulk = getPerson({ name: 'Hulk', age: 99 });

// optional property
function logAge(someone: Person) {
  console.log(someone.age);
}

let captain = { age: 100 };
logAge(captain);