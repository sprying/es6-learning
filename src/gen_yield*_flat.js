'use strict';
/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/7/13.
 */
var flat = function* (a){
    for(let v of a){
        if(Array.isArray(v)){
            yield * flat(v)
        } else {
            yield v
        }
    }
}
for(let v of flat([1,[2,3,[4,5],[6]],7])){
    console.log(v)
}

