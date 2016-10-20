"use strict";

/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/13.
 */
let arr = [1, 2, 3].map(v => {
    return new Promise((resolve, reject) => resolve(v));
});
Promise.all(arr).then(args => console.log(...args)).catch(err => console.log(err));

Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected).catch(function (reason) {
        setTimeout(() => {
            throw reason;
        }, 0);
    });
};

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    this.then(function (value) {
        return P.resolve(callback()).then(function () {
            return value;
        });
    }, function (reason) {
        return P.resolve(callback()).then(function () {
            throw reason;
        });
    });
};
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(value => P.resolve(callback()).then(() => value), reason => P.resolve(callback()).then(() => {
        throw reason;
    }));
};
new Promise((resolve, reject) => setTimeout(() => resolve(1), 0)).finally(res => console.log(res));