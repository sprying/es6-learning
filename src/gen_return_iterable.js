/**
 * Created by sprying on 2016/11/15.
 */

function __createIterableObject(arr, methods) {
  methods = methods || {};
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return {};
  }
  arr.length++;
  var iterator = {
    next: function() {
      return { value: arr.shift(), done: arr.length <= 0 };
    },
    'return': methods['return'],
    'throw': methods['throw']
  };
  var iterable = {};
  iterable[Symbol.iterator] = function(){ return iterator; }
  return iterable;
}

var closed = '';
var iter = __createIterableObject([1, 2, 3], {
  'return': function(){
    closed += 'a';
    return {done: true};
  }
});
var gen = (function* generator(){
  try {
    yield *iter;
  } finally {
    closed += 'b';
  }
})();
console.log(gen.next());
gen['return']();

console.log(closed)