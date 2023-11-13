type DeveloperKeys = keyof { name: string; skill: string; }

function printKeys<T extends DeveloperKeys>(value: T) {
  console.log(value);
}

printKeys('name');
printKeys(100);  // 타입에 맞지 않아서 에러
printKeys('address');  // 문자열 name과 skill만 인자로 받을 수 있어서 에러