/* function  printTextLength<T>(text: T) {
  console.log(text.length);
}
 */

// 제네릭 타입 제한
function printTextLength<T extends { length: number }>(text: T) {
  console.log(text.length);
}

printTextLength<string>('hello');