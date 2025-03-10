/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let map = new Map();
    return function(...args) {
        let argsKey = JSON.stringify(args)
        if(map.has(argsKey)){
            return map.get(argsKey)
        }
        else {
            let value = fn(...args)
            map.set(argsKey,value)
            return value
        }
    }
}
