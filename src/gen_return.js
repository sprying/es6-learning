/**
 * return nodeJs暂不支持，调用会报错，nodeJs6.2.2支持
 */
function* gen(){
    yield 1;
    try{
        yield 11;
        yield 22;
        yield 33;
    }finally{
        console.log('a')
        yield 21;
        yield 22;
    }
    yield 2;
}
let itr = gen()
console.log(itr.next()) // { value: 1, done: false }
console.log(itr.return(31)) // { value: 31, done: true }
console.log(itr.next()) // { value: undefined, done: true }
console.log(itr.next()) // { value: undefined, done: true }
console.log(itr.next()) // { value: undefined, done: true }
