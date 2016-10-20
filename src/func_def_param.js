/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/10.
 */

function log(x, y = 'World'){
    console.log(x, y)
}
log('Hello')
log('Hello','China')
log('Hello','')

function foo({x, y = 5}){
    console.log(y)
}
foo({})
foo({x: 1})
foo({x: 1,y: 2})
try{
    foo()//TypeError: Cannot read property 'x' of undefined
}catch (e){
    console.log(e)
}
//结论：对象的解构赋值，一定要指定值

// 解构赋值结合函数参数默认值
function fetch(url, { method = 'GET'} = {}){
    console.log(method)
}
fetch()

// 函数参数是函数
var x = 1;
function foo(x, y = function() { x = 2; }) {
    var x = 3;// 如果改成let x = 3;就会报错
    y();
    console.log(x);
}

foo() // 3

// 函数参数必填
function throwIfMissing(){
    throw new Error('Missing parameter')
}
function foo(mustBeProvided = throwIfMissing()){
    return mustBeProvided
}
foo()


(function({x,y}){
    return [x,y]
})()