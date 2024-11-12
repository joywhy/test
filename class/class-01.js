const fruits = new Array('사과');
Array.prototype.getName = function (name) {
  console.log(this); //함수가 선언된 시점에 This
};
fruits.getName();
Array.prototype.getage = function fu(name) {
  console.log(this); //함수가 선언된 시점에 This
};
fruits.getage();
