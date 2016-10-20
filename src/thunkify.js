/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/23.
 */
//外部调用者
function co(generator) {
    var itr = generator()

    function run(err, data) {
        if (err) throw err
        var result = itr.next(data)
        if (result.done) return
        result.value(run)
    }
    // 传入回调
    itr.next().value(run)
}
co(function* () {
    var v1 = yield function (callback) {
        setTimeout(function () {
            callback(null, 2)
        }, 100)
    }
    console.log(v1)
})

function thunkify(fn) {
    return function () {
        var args = [].slice.call(arguments)
        return function (callback) {
            args.push(callback)
            fn.apply(null, args)
        }
    }
}


function obtainData(opts, callback) {
    setTimeout(function () {
        callback(null, opts + 1)
    }, 100)
}
co(function* () {
    var v1 = yield thunkify(function (callback) {
        setTimeout(()=>callback(null, 1), 100)
    })()
    var v2 = yield thunkify(obtainData)(v1)
    console.log(v2)
})
