// 제네릭으로 받은 타입이 사용되지 않은 경우
interface Empty<T> {

}

var empty1: Empty<string> = '';
var empty2: Empty<number> = 0;

empty2 = empty1;  // 호환 o
empty1 = empty2;  // 호환 o

// 제네릭으로 받은 타입이 사용된 경우
interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;