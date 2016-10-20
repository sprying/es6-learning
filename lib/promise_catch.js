'use strict';

/**
 * reject未被catch，会被传递到unhandledRejection
 * throw没被catch，无法执行
 * throw后有catch，还有then，但是then应该是catch生成的默认resolve的promise
 */
new Promise((resolve, reject) => {
    throw new Error('err-1');
    console.log('after throw');
    throw new Error('err-2');
    //resolve('done')
    reject(new Error('err'));
}).catch(err => console.log('err1: ', err))
//.catch(err => console.log('err2: ', err))
.then(data => {
    console.log('then: ' + data);
    setTimeout(() => {
        //throw new Error()
    }, 100);
});
//.catch(err => console.log('err3: ', err))
//.catch(err => console.log('err4: ', err))
process.on('unhandledRejection', function (err, p) {
    //console.error(err.stack)
});

var someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing().catch(function (error) {
    console.log('oh no', error);
}).then(function () {
    console.log('carry on');
});