'use strict';

function co(generator) {
    var iterator = generator();
    function go(result) {
        if (result.done) return;
        result.value.then(function (data) {
            go(iterator.next(data));
        });
    }
    go(iterator.next());
}
co(function* () {
    var p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 100);
    });
    var v1 = yield p1;
    console.log(v1);
});

function run(generator) {
    var it = generator();

    function go(result) {
        if (result.done) return result.value;

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }

    go(it.next());
}
var res = run(function* () {
    var p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 200);
    });
    var p2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 100);
    });
    var data1 = yield p1;
    var data2 = yield p2;
    console.log(data1 + ', ' + data2);
    return data1 + data2;
});
console.log(res);