/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/13.
 */
let thenable = {
    then(resolve, reject){
        resolve('hi')
    }
}
Promise.resolve(thenable).then(res => console.log(res))

var p = Promise.resolve('hi')
p.then(res => console.log(res))
