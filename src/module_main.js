/**
 * Created by sprying on 16/11/2.
 */
import { counter, incCounter, obj } from './module_lib.js';
console.log(counter); // 3
incCounter();
console.log(counter); // 4

obj.prop = 123; // OK
//obj = {}; // TypeError
