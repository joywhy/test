/** 함수
 *
 * 1. 함수 선언문
 * 2. 함수 표현식
 */
/** 1. 함수 선언문(Declaration) */
function fn() {}

/** 2. 함수 표현식(Expression) */
const fn = function () {
  console.log('함수 표현식');
};

/** 호이스팅(Hoisting)
 * 자바스크립트에서 함수 호이스팅(function hoisting)은 함수 선언이 해당 함수의 호출보다 먼저 평가되는 개념입니다.
 * 즉, 자바스크립트 엔진은 함수 선언을 코드의 실행 전에 끌어올려서 처리하기 때문에, 함수가 선언되기 전에 호출해도 에러가 발생하지 않습니다.
 * 따라서, 하단의 hello() 함수 호출의 코드가 함수 선언 이전에 작성되어도 작동하는 것이 바로 이 이유에서 입니다.
 *
 * 단, 함수 호이스팅 현상은 함수 선언문에서만 발생하고, 함수 표현문에서는 발생하지 않습니다.
 */

hello(); // hello, world!!
// fn(); // Cannot access 'fn' before initialization

//----------------------------------------------------------------

/** 나머지 매개변수 스프레드 연산자 */
function add(...rest) {
  console.log(rest);
  console.log(arguments); // 유사 배열(Array-Like) 배열 데이터는 아니기 때문에 활용도가 많이 떨어진다.
  /**
   * acc: 누적 값
   * cur: 현재 값
   */
  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4)); // 10
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

//----------------------------------------------------------------
/** 화살표 함수 */

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 2)); // 3
// console.log(sum(10, 20)); // 30

/** 화살표 함수
 * function 키워드를 사용하지 않음
 * return 키워드로 로직이 시작하는 경우에는 return 키워드와 중괄호를 제거하여 사용할 수 있다.
 * 매개변수를 가질 수 있는데, 만약 매개변수가 단 한 개만 있다고 하면 매개변수를 감싸고 있는 소괄호를 생략할 수 있다.
 */

const e = () => {
  return { value: 1 };
};
const f = () => {
  value: 1;
}; // 중괄호로 사용된 부분이 마치 함수의 블록처럼 보이기 때문에, 자바스크립트 문법적으로 이해할 수 없는 코드가 들어있기 때문에 오류가 난다.
const g = () => ({ value: 1 }); // 위 문제를 해결하기 위해 객체 데이터는 소괄호 묶어준다.
const h = () => {
  return [1, 2, 3];
};
const i = () => [1, 2, 3];

//-----
//콜백
const sum = (a, b) => {
  setTimeout(() => {
    return a + b; // callback 함수의 return
  }, 1000);
};
console.log(sum(1, 2)); // undefined
console.log(sum(3, 7)); // undefined

const sum2 = (a, b, c) => {
  setTimeout(() => {
    c(a + b);
  }, 1000);
};
sum2(1, 2, (value) => {
  console.log(value);
});
sum2(3, 7, (value) => console.log(value));

//----------------------------------------------------------------
/** 재귀
 * 재귀 호출은 개념적으로 함수 내부에서 자기 자신을 다시 호출한다는 것
 * 주의사항은 재귀 호출은 무한으로 반복 실행되기 때문에 멈출 수 있는 조건식을 반드시 작성해주어야 한다.
 */
const userA = {
  name: 'A',
  parent: null,
};
const userB = {
  name: 'B',
  parent: userA,
};
const userC = {
  name: 'C',
  parent: userB,
};
const userD = {
  name: 'D',
  parent: userC,
};

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }
  return user;
};
console.log(getRootUser(userC));

/** this
 * 일반 함수의 this는 호출 위치에서 정의
 * 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
 * 렉시컬: 함수가 동작할 수 있는 유효한 범위를 의미
 */
/** this
 * 일반 함수의 this는 호출 위치에서 정의
 * 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
 * 렉시컬: 함수가 동작할 수 있는 유효한 범위를 의미
 */

const user = {
  firstName: '9Diin',
  lastName: 'Park',
  age: 32,
  getFullName: function () {
    // return `${user.firstName} ${user.lastName}`;
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.getFullName());

const user2 = {
  firstName: '9Diin',
  lastName: 'Park',
  age: 32,
  getFullName: () => {
    // return `${user.firstName} ${user.lastName}`;
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user2.getFullName());

function user3() {
  this.firstName = '길동';
  this.lastName = '홍';

  return {
    firstName: '9Diin',
    lastName: 'Park',
    age: 32,
    getFullName: () => {
      // return `${user.firstName} ${user.lastName}`;
      return `${this.firstName} ${this.lastName}`;
    },
  };
}
console.log(user3().getFullName());

const timer = {
  title: 'TIMER!',
  timeout() {
    console.log(this.title); // TIMER!
    setTimeout(function () {
      console.log(this.title); // undefined
    }, 1000);
    setTimeout(() => {
      console.log(this.title); // TIMER!
    }, 1000);
  },
};
timer.timeout();
