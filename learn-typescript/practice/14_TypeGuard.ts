function updateInput(textInput: number | string | boolean) {
  // 타입 가드
  // textInput.toFixed(2);

  // 타입 단언으로 타입 에러 해결하기
  /* (textInput as number).toFixed(2);
  console.log((textInput as string).length); */

  // 타입 가드로 문제점 해결하기
  if (typeof textInput === 'number') {
      textInput.toFixed(2);
      return;
  }

  if(typeof textInput === 'string') {
    console.log(textInput.length);
    return;
  }

}

updateInput('hello');