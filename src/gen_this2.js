/**
 * Created by sprying on 2016/11/15.
 */
function* gen(){
  yield 1;
  yield 2;
  yield this.name = 'sprying'
}
gen.prototype.sayHi = () =>console.log('hi')
const g = gen()
g.next()
g.next()
g.next()

g.sayHi()
g.name // null
