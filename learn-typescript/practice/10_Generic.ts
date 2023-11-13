// 1. 타입을 미리 지정하지 않고 호출할 때 타입을 지정하는 이유
/* function getText(text: string): string {
  return text;
}

function getNumber(text: number): number {
  return text;
} */

// 2. any를 사용하면 되지 않을까?
/* function getText(text: any): any {
  return text;
} */

// 3. 제네릭 사용
function getText<T>(text: T): T {
  return text;
}

var myString = getText<string>('hi');
var myNumber = getText<number>(30);

// 4. 인터페이스 객체에 제네릭 사용
/* interface ProductDropdown {
  value: string;
  selected: boolean;
}

interface StockDropdown {
  value: number;
  selected: boolean;
} */

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

// 드롭 다운 유형별로 하나의 제네릭 인터페이스를 연결
var product: Dropdown<string>;
var stock: Dropdown<number>;
var address: Dropdown<{ city: string; zipCode: string }>;

// 특정 조건을 갖는 타입만 제약
function lengthOnly<T extends {length: number}>(value: T) {
  return value.length;
}

lengthOnly({ title: 'abc', length: 123 });
// lengthOnly(100);  // 에러 발생