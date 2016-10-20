"use strict";
/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/11.
 */
console.log(...[1, 2, 3])

let add = (a,b) => a + b
console.log(add(...[1,2]))

function length(str) {
    return [...str].length;
}

console.log(length('x\uD83D\uDE80y')); // 3
