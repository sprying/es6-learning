/**
 * Created by sprying on 2016/11/17.
 */
class Bork {
  //Property initializer syntax
  // 要使用babel转码 stage-2
  instanceProperty = "bork";
  boundFunction = () => {
    return this.instanceProperty;
  }

  //Static class properties
  static staticProperty = "babeliscool";
  static staticFunction = function() {
    return Bork.staticProperty;
  }
}

let myBork = new Bork;

//Property initializers are not on the prototype.
//console.log(myBork.prototype.boundFunction); // > undefined

//Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call(undefined)); // > "bork"

//Static function exists on the class.
console.log(Bork.staticFunction()); // > "babelIsCool"
