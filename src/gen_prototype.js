/**
 * Created by sprying on 2016/11/15.
 */

function * generatorFn(){}
var ownProto = Object.getPrototypeOf(generatorFn());
var passed = ownProto === generatorFn.prototype;

var sharedProto = Object.getPrototypeOf(ownProto);
passed &= sharedProto !== Object.prototype &&
  sharedProto === Object.getPrototypeOf(function*(){}.prototype) &&
  sharedProto.hasOwnProperty('next');

console.log(passed)