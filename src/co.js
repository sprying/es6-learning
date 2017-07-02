/**
 * Created by sprying on 16/10/16.
 */
var slice = Array.prototype.slice

function thunkify(callback) {
  return function () {
    var args = slice.apply(arguments)
    return function (hook) {
      var isCalled = false
      args.push(function () {
        if (!isCalled) {
          hook.apply(null, arguments)
        }
        isCalled = true
      })
      callback.apply(null, args)
    }
  }
}


/**
 * co函数要返回Promise，要支持容错，yield后面能跟Promise thunk函数，还有Generator函数，遍历器对象，数组，对象
 * 如果yield后面非上面罗列类型，会抛错到定义地方，然后继续next
 * @param gen
 * @returns {$Promise|Promise|*}
 */
function co(gen) {
  var ctx = this
  var args = slice.call(arguments, 1)

  return new Promise((resolve, reject) => {
    if (typeof gen == 'function') gen = gen.call(ctx, args)
    if (!gen || typeof gen.next != 'function') return resolve(gen)

    onFulfilled()

    function onFulfilled(res) {
      var ret
      try {
        ret = gen.next(res)
      } catch (e) {
        reject(e)
      }

      next(ret)
    }

    function onRejected(err) {
      var ret
      try {
        ret = gen.throw(err)
      } catch (e) {
        return reject(e)
      }

      next(ret)
    }

    function next(ret) {
      if (ret.done)  return resolve(ret.value)
      var value = toPromise(ret.value)
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected)
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, object'))
    }

    function toPromise(obj) {
      if (!obj) return obj
      if (isPromise(obj)) return obj
      if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(ctx, obj)
      if (typeof obj == 'function') return thunkToPromise(obj)
      if (Array.isArray(obj)) return Promise.all(obj.map(toPromise))
      if (obj.constructor == Object) return objectToPromise(obj)
      return obj
    }

    function objectToPromise(obj) {
      var keys = Object.keys(obj)
      var result = {}
      var promise = []
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        var v = obj[key]
        result[key] = undefined
        promise.push(toPromise(v).then(res => {
          result[key] = res
        }))
      }
      return Promise.all(promise).then(() => {
        return result
      })
    }

    function thunkToPromise(obj) {
      return new Promise((resolve, reject) => {
        obj((err, data) => {
          if (err) reject(err)
          resolve(data)
        })
      })
    }

    function isGeneratorFunction(obj) {
      var constructor = obj.constructor
      if (!constructor)  return false
      if (constructor.name == 'GeneratorFunction' || constructor.displayName == 'GeneratorFunction')  return true
      return false
    }

    function isGenerator(obj) {
      if (typeof obj.next == 'function' && typeof obj.throw == 'function') return true
      return false
    }

    function isPromise(obj) {
      if (typeof obj.then == 'function') return true
      return false
    }
  })
}

function * gen1() {
  var rtn = yield thunkify(cb => {
    cb(null, 12)
  })()
  return rtn * 2
}

co(function *() {
  var rt1 = yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 500)
  })

  var rt2 = yield thunkify((callback) => {
    callback(false, 2)
  })()

  try {
    yield 3
  } catch (e) {
    console.log(e)
  }

  var arr = yield [
    new Promise((resolve, reject) => {
      resolve(5)
    }),
    thunkify((a, callback) => {
      setTimeout(() => {
        callback(null, 6)
      }, a)
    })(500)
  ]

  console.log(arr)
  // 下面两个结果一样
  //var hi = yield * gen1()
  var hi = yield gen1
  console.log(hi)

  console.log(rt1 + rt2)

  return 11
}).then(data => {
  console.log(data)
}).catch(e => {
  console.log(e)
})
