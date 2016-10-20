/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/13.
 */
setTimeout(()=>console.log(4),0)
new Promise(function (resolve, reject) {
    console.log(1);
    //x/2;
    resolve();
}).then(function () {
    console.log(2)
    //throw new Error('err')
},function(err){
    console.log(err)
});
console.log(3)


