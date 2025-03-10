/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n = init;
    let obj = {
        increment() {
            n++
            return n;
        },
        decrement() {
            n--;
            return n;
        },
        reset() {
          n = init;
          return n;
        }  
    }
    return obj;
};
