/**
 * 注意执行顺序
 */
setTimeout(()=>console.log(1),0)
new Promise(function (resolve, reject) {
    console.log(2);
    x/2;
    resolve();
}).then(function () {
    console.log(3)
    //throw new Error('err')
},function(err){
    console.log(err)
});
console.log(4)

