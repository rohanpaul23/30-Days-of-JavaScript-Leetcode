/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isMethodCalled = false
    return function(...args){
        if(isMethodCalled){
            return undefined
        }
        isMethodCalled = true
        return fn(...args)
    }
};
