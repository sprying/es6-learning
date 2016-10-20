'use strict';

/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/11.
 */
function f() {
    let y = arguments.length <= 0 || arguments[0] === undefined ? x : arguments[0];
    return function () {
        let x = 2;
        console.log(y);
    }();
}

try {
    f();
} catch (e) {
    console.log(e);
} // ReferenceError: x is not defined

//let foo = 'outer';

function bar() {
    let func = arguments.length <= 0 || arguments[0] === undefined ? () => foo : arguments[0];

    let foo = 'inner';
    console.log(func()); // outer
}

bar();