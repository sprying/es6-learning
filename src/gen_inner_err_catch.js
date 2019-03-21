/**
 * 遍历器对象连续两次throw
 */

function* errCnt() {
    try {
        yield 5 // { value: 5, done: false }
    } catch (e) {
        console.log('内部捕获', e)
        //throw new Error('cry')
    }
    yield 6
    yield 7
}
var itr = errCnt()
console.log(itr.next())
console.log(itr.throw('a')) // { value: 6, done: false }
try {
    console.log(itr.throw('a'))
} catch (e) {
    console.log('外部捕获', e)
    console.log(itr.next()) // { value: undefined, done: true }
}
