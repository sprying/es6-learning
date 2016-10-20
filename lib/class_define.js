'use strict';

/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/8/13.
 */
let action = 'think';
class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' sayed');
    }
    [action]() {
        console.log(this.name + ' is thinking over the life');
    }
    static putCount() {
        console.log('hi');
    }
}
console.log(typeof Person);
console.log(Person.prototype.constructor === Person);
Object.assign(Person.prototype, {
    watch() {
        console.log(this.name + ' watching person of suspect');
    }
});

let sprying = new Person('sprying');
sprying.think();
sprying.watch();

let person = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('张三');
person.sayName();

const bar = Symbol('bar');
const snaf = Symbol('snaf');

class Sp {
    foo(param) {
        this[bar](param);
    }
    [bar](param) {
        this[snaf] = param;
    }
}

let sp = new Sp();
sp.foo('hello');

class Men extends Person {
    constructor(name) {
        super(name);
        this.sex = 'men';
    }
    speak() {
        console.log("I'm a man.");
        super.speak();
    }
}
Men.time = '20 minutes';
let xiaoming = new Men('xiaoming');
xiaoming.speak();
Men.putCount();
console.log(Men.time);

console.log(xiaoming instanceof Person);
console.log(xiaoming instanceof Men);

let Lucy = class Women {};
console.log(Lucy.name);