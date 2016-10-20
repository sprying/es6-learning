/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/8/13.
 */
class A{}
class B extends A{}
console.log('__proto__')
console.log(B.__proto__ === A)
console.log(B.prototype.__proto__ === A.prototype)

function inherit(A, B){
    function proto(){}
    proto.prototype = B.prototype
    A.prototype = Object.create ? Object.create(B.prototype): new proto()
    A.prototype.constructor = A
}
function Super(){}
function Sub(){
    Super.apply(this, arguments)
}
inherit(Sub, Super)

//Object.setPrototypeOf = function (obj, proto) {
//    obj.__proto__ = proto;
//    return obj;
//}
class C{}
class D{}
Object.setPrototypeOf(D, C)
Object.setPrototypeOf(D.prototype, C.prototype)
//D.prototype = Object.create(C.prototype)
console.log('setPrototypeOf')
console.log(Object.setPrototypeOf({} ,Array.prototype) instanceof Array)

let instance = new D()
console.log(instance instanceof C)
console.log(instance instanceof D)

class E extends B{}
console.log('getPrototypeOf')
console.log(Object.getPrototypeOf(E) === B)
console.log(Object.getPrototypeOf(B) === A)
console.log(Object.getPrototypeOf(E) === A) //false
console.log(Object.getPrototypeOf(D) === C) //true

var obj = {
    toString() {
        return "MyObject: " + super.toString();
    }
};

console.log('super')
console.log(obj.toString()); // MyObject: [object Object]