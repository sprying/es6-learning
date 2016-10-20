/**
 * return nodeJs暂不支持，nodeJs6.2.2支持
 */
function* gen(){
    yield 1;
    try{
        yield 11;
        yield 22;
        yield 33;
    }finally{
        yield 21;
        yield 22;
    }
    yield 2;
}
let itr = gen()
console.log(itr.next())
console.log(itr.return(31))
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
