interface Person {
  name: string;
  age: number;
  industry: 'common';
}

interface Developer {
  name: string;
  age: string;
  industry: 'tech';
}

function greet(someone: Person | Developer) {
  switch (someone.industry) {
    case 'common':
      console.log(someone.age.toFixed(2));
      break;
    case 'tech':
      console.log(someone.age.split(''));
      break;
  }
}