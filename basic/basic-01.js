/*
식별자 (변수): 코드 내의 변수, 함수 혹은 속성을 식별하는 문자열이다.
대소문자,$, _, 숫자 쓸수 있지만 숫자로 시작은 안된다.
길이  제한 없음  
*/

/**
 * let 키워드
 * age 식별자
 * 30 데이터
 */
let age = 30;

const obj = {
  age: 10,
  ['my name']: 'lee', // 공백이 들어간 식별자
};

console.log(obj['my name']); // 공백이 들어간 키를 만들수 있다.

/**
 * 식별자 표기법 4가지
 * 카멜 케이스 camelCase  : setAge  보통 변수명, 함수명
 * 스네이크 케이스 snake_case : set_age 언제 쓰임?
 * 파스칼 케이스 PascalCase : SetAge 파일명/컴포넌트명
 * 케밥 케이스 kebab Case : set-age 언제 쓰임?
 */

const num3 = -123.5678;
const pi = 3.14; // 부동소수점

console.log(num3 + undefined); // 2-1: NaN
console.log(typeof (num3 + undefined)); // number
console.log(typeof pi); // number
/** NaN이라는 Not a number라는 데이터는 타입 자체는 숫자 데이터인데
 * 특정한 숫자 값으로 표현할 수 없기 때문에 NaN으로 표시하여 반환한다.
 * 그래서 NaN 값이 나왔다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어있을 가능성이 있다는 것을 의미한다.
 */

const a = 0.1;
const b = 0.2;
console.log(a + b); // 0.30000000000000004 -> 컴퓨터에서 부동소수점을 연산할 때, 오류가 생길 수 있다.
console.log(typeof (a + b).toFixed(1)); // string
console.log(typeof Number((a + b).toFixed(1))); // number
console.log(Number((a + b).toFixed(1))); // 0.3
/** null과 undefined */
/**
 * null: 존재하지 않는다. 값이 비어있다. 값을 알 수 없다. 명시적으로 표현
 * 의도적으로 변수를 비우거나, 특정 상황에서 값이 없음을 나타내기 위해 사용됩니다.
 *
 * undefined: 변수가 선언되었지만 값이 할당되지 않았음을 나타냅니다.
 * 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 때도 undefined가 반환됩니다.
 */
let value;
console.log(value);
function fn() {
  let i = 1;
}
console.log(fn());
const obj2 = {
  name: 'lee',
  age: 30,
};
console.log(obj2.birthday);

const A = 1; // Number
const B = '1'; // String

console.log(A == B); // true -> 동등 연산자 (형변환이 일어난다.)
console.log(A === B); // false -> 일치 연산자 (개발 시, 되도록이면 일치 연산자를 사용하도록 한다.)
/** 참과 거짓(Truthy & Falsy) */
/**
 * 숫자 0은 거짓에 해당한다.
 * null, undefined, false도 거짓에 해당한다.
 * NaN, 빈 문자데이터 "" 역시 거짓에 해당한다.
 * */
const fruits = ['사과', '바나나', '포도', '수박', '딸기'];

if (fruits) {
  console.log('배열 데이터 안의 아이템이 들어있다.');
}
//데이터 타입 확인

console.log(typeof 'Hello'); // string
console.log(typeof 'Hello' === 'string'); // true
console.log(typeof false === 'boolean'); // true
console.log(typeof undefined === 'undefined'); // true
console.log(typeof null === 'null'); // false

console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object

console.log([].constructor === Array); // true
console.log({}.constructor === Object); // true

/** null 데이터는 어떻게 타입을 확인할 수 있을까? */
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1)); // Null

/** 코드 재사용 */
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null)); // Null
console.log(checkType([])); // Array
console.log(checkType({})); // Object
console.log(checkType('안녕하세요!')); // String
console.log(checkType(1100)); // Number
console.log(checkType(function () {})); // Function
console.log(checkType(true)); // Boolean
console.log(checkType(undefined)); // Undefined
