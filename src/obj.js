/**
 * Created by sprying on 16/10/15.
 */
console.log(Object.values(2))//[]

let obj = { a: { b: 1 } };
let { ...x } = obj;
obj.a.b = 2;
console.log(x.a.b) // 2