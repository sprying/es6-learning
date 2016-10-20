/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/13.
 */
let promise = new Promise(function(resolve, reject){
    resolve({data:''})
})
let promise1 = promise.then(function(res){
    console.log('I\'m OK')
    throw Error('then throw error')
})
console.log(promise === promise1)
promise1.catch(function(err){
    console.log(err)
})