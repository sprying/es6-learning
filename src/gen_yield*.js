/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/13.
 */
function* gen1(){
    yield 1;
    yield 2;
    return 3;
}
function* gen2(gen){
    yield 11;
    let rtn = yield* gen();
    console.log('rtn: ' + rtn)
    yield 22;
}
let itr1 = gen1()
console.log(itr1.next()) // { value: 1, done: false }
console.log(itr1.next()) // { value: 2, done: false }
console.log(itr1.next()) // { value: 3, done: true }

let itr2 = gen2(gen1)
console.log(itr2.next()) // { value: 11, done: false }
console.log(itr2.next()) // { value: 1, done: false }
console.log(itr2.next()) // { value: 2, done: false }
                         // rtn: 3
console.log(itr2.next()) // { value: 22, done: false }
console.log(itr2.next()) // { value: undefined, done: true }
for(let v of gen2(gen1)){
    console.log(v)
}
