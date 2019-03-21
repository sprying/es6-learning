/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/13.
 */
let thenable = {
    then(resolve, reject){
        resolve('thenable')
    }
}
Promise.resolve(thenable).then(res => console.log(res))


var p = Promise.resolve('hi')
p.then(res => console.log(res))


// 输出
// hi
// thenable