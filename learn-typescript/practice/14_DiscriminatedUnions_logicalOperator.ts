function sayHi(message: string | null) {
  // 1. message가 null 인지 check하는 코드 추가
  if(message === null) {
    return;
  }

  // 2. null 아님 보장 연산자 사용
  if(message!.length > 3) {
    console.log(message);
  }

  // 3. && 연산자 사용
  if(message && message.length > 3) {
    console.log(message);
  }
}