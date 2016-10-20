/**
 * 遍历器对象抛错，执行还会从这次yield开始，到下次yield执行结束，不影响遍历
 */

function* errCnt(){
    try{
        yield 5
    }catch (e){
        console.log('内部捕获', e)
        //throw new Error('cry')
    }
    yield 6
    yield 7
}
var itr = errCnt()
console.log(itr.next())
console.log(itr.throw('a'))
try{
    console.log(itr.throw('a'))
}catch(e){
    console.log('外部捕获', e)
    console.log(itr.next())
}

