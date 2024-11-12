/**산술 연산자 */
console.log(20 % 2); //0
function isEven(num) {
  return num % 2 === 0;
}

if (isEven(10)) {
  console.log('짝수입니다');
}

let c = 30;
console.log(c++); //30
console.log(c); //31

let d = 30;
console.log(++d); //31
console.log(d); //31
