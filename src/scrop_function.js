/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/9/11.
 */
'use strict';
function f(){ console.log(1)}
(function(){
  //f()
  if(true){
    function f(){console.log(2)}
  }
  f() //use strict 输出1
})()
