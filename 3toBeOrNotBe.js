var expect = function(val) {
    return {
          toBe : function(val1){
             if(val1 === val){
                 return true
             }
             else{
                 throw Error("Not Equal")
             }
         },
         notToBe : function(val1){
             if(val1 !== val){
                 return true
             }
             else{
                 throw Error("Equal")
             }
         }
     } 
 };
 