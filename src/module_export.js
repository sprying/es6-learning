"use strict"
let set = new Set().add('a').add('b').add('c');

let [x,y] = set;
// x='a'; y='b'

let [first, ...rest] = set;
// first='a'; rest=['b','c'];

typeof varmy

function fn(){
    console.log('hello, I\'m from let.js')
}


export var dynamicV = 1
export function add(){
    dynamicV++
    console.log(`export dynamicV: ${dynamicV}`)
}

export * from './module_export_super.js'

export default 5