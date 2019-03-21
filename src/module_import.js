/**
 * Created by sprying on 16/10/15.
 */
console.log(dynamicV)
import method, {dynamicV, add} from './module_export.js'
add()
console.log(dynamicV)

console.log(method)

method = 6
console.log(method)
