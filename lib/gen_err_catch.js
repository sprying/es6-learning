'use strict';

/**
 * 一开始没执行next，就执行throw，内部无法捕获。
 */
function* gen() {
    try {
        console.log('start');
        console.log('work hard');
        yield 1;
    } catch (e) {
        console.log('内部捕获', e);
    }
    yield 2;
}
let g = gen();
try {
    g.throw('a');
    g.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}