interface NumberSalaryMap {
  [level: string]: number;
}

let numberSalary: NumberSalaryMap = {
  junior: 100,
};

let numberMoney = numberSalary['junior'];

interface StringSalaryMap {
  [level: string]: string;
}

let stringSalary: StringSalaryMap = {
  junior: '100원',
};

let stringMoney = stringSalary['junior'];
