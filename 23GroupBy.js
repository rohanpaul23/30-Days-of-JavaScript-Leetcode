Array.prototype.groupBy = function(fn) {
    const arr = this
    const result = {}
 
     arr.forEach((el)=>{
         const target = fn(el)
         if(target in result) {
            return result[target].push(el)
         }
         result[target] = [el]
     })
 
     return result  
 };
 