'use strict';
/**
 * node v6.9.0 chrome52下执行return
 * @type {{cur: number}}
 */
var obj = {
  cur: 1,
  next() {
    return {
      value: this.cur++,
      done: false
    }
  },
  return() {
    this.cur = 0
    console.log('execute iterator\'s method of return')
    return {
      done: true
    }
  },
  [Symbol.iterator]() { // 没有会报错
    return this;
  }
};

console.log(obj.next())
obj.return()
/*
for (let v of obj) {
//for (let v of obj[Symbol.iterator]()) { // 结果跟上面一致
  //throw new Error(); //也会执行return
  if (v > 10) {
    break;
  }
  if (v == 8) {
    continue;
  }
  console.log(v);
}
*/
