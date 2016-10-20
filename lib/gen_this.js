'use strict';

/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/8/14.
 */
function* gen() {
    yield this.prop1 = 1;
    yield this.prop2 = 2;
}
Object.assign(gen.prototype, {
    sayHi() {
        console.log('hi');
    }
});
let g = gen.apply(gen.prototype);
g.next();
g.next();
g.sayHi();
console.log(g.prop1);