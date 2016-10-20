/**
 * Created by yingchun.fyc@alibaba-inc.com on 16/9/11.
 */
Object.defineProperty(Object.prototype, "__proto__", {
  set(proto){
    let _objThis = Object(this)
    return Object.setPrototypeOf(_objThis, proto)
  }
})