'use strict';

/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/10.
 */

function log(x) {
    let y = arguments.length <= 1 || arguments[1] === undefined ? 'World' : arguments[1];

    console.log(x, y);
}
log('Hello');
log('Hello', 'China');
log('Hello', '');

function foo(_ref) {
    let x = _ref.x;
    var _ref$y = _ref.y;
    let y = _ref$y === undefined ? 5 : _ref$y;

    console.log(y);
}
foo({});
foo({ x: 1 });
foo({ x: 1, y: 2 });
try {
    foo(); //TypeError: Cannot read property 'x' of undefined
} catch (e) {
    console.log(e);
}
//结论：对象的解构赋值，一定要指定值

// 解构赋值结合函数参数默认值
function fetch(url) {
    var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref2$method = _ref2.method;
    let method = _ref2$method === undefined ? 'GET' : _ref2$method;

    console.log(method);
}
fetch();

// 函数参数是函数
var x = 1;
function foo(x) {
    let y = arguments.length <= 1 || arguments[1] === undefined ? function () {
        x = 2;
    } : arguments[1];

    var x = 3; // 如果改成let x = 3;就会报错
    y();
    console.log(x);
}

foo(); // 3

// 函数参数必填
function throwIfMissing() {
    throw new Error('Missing parameter');
}
function foo() {
    let mustBeProvided = arguments.length <= 0 || arguments[0] === undefined ? throwIfMissing() : arguments[0];

    return mustBeProvided;
}
foo()(function (_ref3) {
    let x = _ref3.x;
    let y = _ref3.y;

    return [x, y];
})();