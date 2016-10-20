'use strict';

/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/13.
 */
function* gen1() {
    yield 1;
    yield 2;
    return 3;
}
function* gen2(gen) {
    yield 11;
    let rtn = yield* gen();
    console.log('rtn: ' + rtn);
    yield 22;
}
let itr1 = gen1();
console.log(itr1.next());
console.log(itr1.next());
console.log(itr1.next());

let itr2 = gen2(gen1);
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
for (let v of gen2(gen1)) {
    console.log(v);
}