/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
        let completedPromises = 0;
        let results = []
        for(let i=0 ;i < functions.length; i++){
            functions[i]().then((res)=>{
                results[i] = res
                completedPromises++;
                if(completedPromises === functions.length){
                    resolve(results)
                }
            })
            .catch(e=>{
                reject(e)
            })
        }
        
    })
};