// 1. 타입을 미리 지정하지 않고 호출할 때 타입을 지정하는 이유
/* function getText(text: string): string {
  return text;
}

function getNumber(text: number): number {
  return text;
} */

// 2. any를 사용하면 되지 않을까?
function getText(text: any): any {
  return text;
}