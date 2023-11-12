interface Person {
  name: string;
  age: number;
}

function getPerson(someone: Person): Person {
  return someone;
}

let hulk = getPerson({ name: 'Hulk', age: 99 });