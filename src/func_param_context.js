/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/11.
 */
function f(y = x) {
    let x = 2;
    console.log(y);
}

try{f()}catch(e){console.log(e)} // ReferenceError: x is not defined

//let foo = 'outer';

function bar(func = () => foo) {
    let foo = 'inner';
    console.log(func()); // outer
}

bar();
