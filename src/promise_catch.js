/**
 * reject未被catch，会被传递到unhandledRejection
 * Promise内部throw没被catch，会被传递到unhandledRejection，其它不做任何处理
 * throw后有catch，还有then，但是then应该是catch生成的默认resolve的promise
 */
new Promise((resolve, reject) => {
    //reject(new Error('err'))
    //setTimeout(() => {
        throw new Error('err-1')
    //}, 0)
    //resolve('done')
})
    .catch(err => console.log('err: ', err))
    .then((data) => {
        console.log('then: ' + data)
    })
process.on('unhandledRejection', function (err, p) {
    //console.error(err.stack)
});

var someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

// 注意与上面对比的执行时间
///*
someAsyncThing()
    .catch(function (error) {
        console.log('oh no', error);
    })
    .then(function () {
        console.log('carry on');
    });
    //*/
