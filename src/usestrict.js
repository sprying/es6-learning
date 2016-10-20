/**
 * Created by sprying on 16/10/15.
 */
function f(){ console.log(1)}
(function(){
  f()
  if(true){
    function f(){console.log(2)}
  }
  //f() 在浏览器端输出2，在NodeJs(v5.6.0)端加上use strict输出1
})()
