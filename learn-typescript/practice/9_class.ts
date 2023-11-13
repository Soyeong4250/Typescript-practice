// 1. 객체 정의
/* let capt = {
  name: '캡틴',
  skill: '방패 던지기',
}

let lee = {
    name: '길벗',
    skill: '좋은 책 만들기',
} */

// 2. 생성자 함수 사용하기
/* function Person (name, skill) {
  this.name = name;
  this.skill = skill;
}

var capt = new Person('캡틴', '방패 던지기');
var lee = new Person('길벗', '좋은 책 만들기'); */

// 3. 생성자 함수 비교
/* function Person(name, skill) {
	this.name = name;
	this.skill = skill;
}

Person.prototype.sayHi = function() {
	console.log('hi');
}

var joo = new Person('형주', '인프랩 운영'); */

// 4. 생성자 함수의 코드를 그대로 클래스로 옮기기 & 클래스 속성 이름과 타입 지정
class PersonObj {
  name: string;  // 클래스 필드 or 클래스 속성
  skill: string;

  constructor(name: string, skill: string) {  // 생성자 메서드
    this.name = name;
    this.skill = skill;
  }

  sayHi(): void {  // 클래스 메서드
    console.log('hi');
  }
}

var joo = new PersonObj('형주', '인프랩 운영');  // 클래스 인스턴스