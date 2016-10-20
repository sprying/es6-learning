/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/9/12.
 */
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f()
  .then(v => console.log(v))

async function dbFuc(fn) {
  let docs = [1,2,3];
  let promises = docs.map((doc) => fn(doc));

  let results = await Promise.all(promises);
  console.log(results);
}

// 或者使用下面的写法
// 两个运行实际差不多，因为都是先生成了promise，再调用await。await、yield，参数默认值都是延迟执行的。

async function dbFuc1(fn) {
  let docs = [4,5,6];
  let promises = docs.map((doc) => fn(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}
var startTime = (new Date()).getTime()
dbFuc1((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(data)
    }, 1000)
  })
}).then(() =>{
  console.log((new Date().getTime() - startTime))
})
