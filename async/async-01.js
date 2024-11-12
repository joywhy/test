//에이싱크 어웨잇

console.log(1);
console.log(2);

setTimeout(() => {
  console.log(3);
}, 1000);

console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
for (let i = 0; i < 100; i++) {
  console.log(i);
}

//------

const e = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(5);
      resolve();
    }, 1000);
  });
};

const f = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(6);
      resolve();
    }, 1000);
  });
};

const g = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(7);
      resolve();
    }, 1000);
  });
};

const h = () => console.log(8);

e()
  .then(() => f())
  .then(() => g())
  .then(() => {
    h();
  });

/** Promise에서 resolve는 하나의 함수 데이터만 받으면 됩니다. */
e()
  .then(b)
  .then(c)
  .then(d)
  .then(() => console.log('done!'));
//----------------------------------------------------------------
//  async와 await는 꼭 세트로 같이 사용해야한다.
//  *
//  * 주의할 점은 await라는 키워드는 console.log()와 같은 단순히 값을 출력하는 동기 함수 등에 붙여서 사용하면 안된다.
//  * console.log()는 Promise 인스턴스를 반환하지 않기 때문이다.
//  * 따라서, async/await는 Promise를 반환하는 함수에서만 사용해야 한다.
