/**
 * 一开始没执行next，就执行throw，内部无法捕获。
 */
function* gen(){
    try{
        console.log('start')
        yield 1;
    }catch(e){
        console.log('内部捕获',e)
    }
    yield 2;
}
var g = gen();
try{
    //g.throw('a');
    console.log(g.next()) // { value: 1, done: false }
    console.log(g.throw('b')) // { value: 2, done: false }
}catch(e){
    console.log('外部捕获',e)
}
