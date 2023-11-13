/* function  printTextLength<T>(text: T) {
  console.log(text.length);
}
 */

// 제네릭 타입 제한
function printTextLength<T extends { length: number }>(text: T) {
  console.log(text.length);
}

printTextLength<string>('hello');

// 제네릭 배열 타입으로 받기
function printArrayLength<T>(text:T[]) {
  console.log(text.length);
}

printArrayLength(['a', 'b', 'c']);
printArrayLength([true, false]);