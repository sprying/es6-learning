/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/8/13.
 */
let action = 'think'
class Person{
    constructor(name){
        this.name = name
    }
    //name // es6不支持
    speak(){
        console.log(this.name + ' said')
    }
    excThis = () => {
        console.log(this.name)
    }
    [action](){
        console.log(this.name + ' is thinking over the life')
    }
    static putCount(){
        console.log('hi')
    }
}
console.log(typeof Person)
console.log(Person.prototype.constructor === Person)
Object.assign(Person.prototype, {
    watch(){
        console.log(this.name + ' watching person of suspect')
    }
})

let sprying = new Person('sprying')
sprying.think()
sprying.excThis.call(undefined)
sprying.watch()


let person = new class{
    constructor(name) {
        this.name = name
    }
    sayName(){
        console.log(this.name)
    }
}('张三')
person.sayName()

const bar = Symbol('bar')
const snaf = Symbol('snaf')

class Sp{
    foo (param){
        this[bar](param)
    }
    [bar](param){
        this[snaf] = param
    }
}

let sp = new Sp()
sp.foo('hello')

class Man extends Person{
    constructor(name){
        super(name)
        this.sex = 'man'
    }
    speak(){
        console.log("I'm a man.")
        super.speak()
    }
    //static time = '20 minutes' // es6不支持
}
let xiaoming = new Man('xiaoming')
xiaoming.speak()
Man.putCount()
console.log(Man.time)

console.log(xiaoming instanceof Person)
console.log(xiaoming instanceof Man)

let Lucy = class Woman{}
console.log(Lucy.name)

