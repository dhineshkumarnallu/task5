//rotate
//iife function 
(function rotate(num,k){
	  let i=0;
	  while(i<k){
	    num.unshift(num.pop())
	    i++;
	  }
	  //console.log(num);
	
	}
	)([1,2,3,4,5],3)
    //out put (5) [3, 4, 5, 1, 2]
    //annonyomus 
    var rotate =function (num,k){
        let i=0;
        while(i<k){
          num.unshift(num.pop())
          i++;
        }
        return num
      
      }
      //console.log(rotate([1,2,3,4,5],6))
      //out put(5) [5, 1, 2, 3, 4]
      //arrow 
      var rotate = (num,k)=>{
        let i=0;
        while(i<k){
          num.unshift(num.pop())
          i++;
        }
        return num
      
      }
      //console.log(rotate([1,2,3,4,5],2))
      //(5) [4, 5, 1, 2, 3]
      //-----------------------------------------------------------------
      //sum of array
      //anonyomus function
            var add=function(sum){
        	  var result =0;
    	    for(var i=0;i<sum.length;i++){
        	    result=result+sum[i];
        	  }
        	  return result
        	}
        	//console.log(add([1,2,3,4,5]));
           //out put 15
           
            //iife function
            (function add(sum){
                var result =0;
              for(var i=0;i<sum.length;i++){
                  result=result+sum[i];
                }
                //console.log(result);
              }
              )([1,2,3,4,5]);

              //out put 15


              //arrow function
              var add=(sum)=>{
                var result =0;
              for(var i=0;i<sum.length;i++){
                  result=result+sum[i];
                }
                return result
              }
              //console.log(add([1,2,3,4,5]));
              //out put 15
             // ----------------------------------------------------------------



             //odd numbers
             //anonyomus function
             var odd=function (arr){
                var result =[];
                for(var i=0;i<arr.length;i++){
                  if(arr[i]%2!=0){
                    result.push(arr[i]);
                  }
                }
                return result;
                }
               console.log(odd([5,4,3,6,7,8,9]))
             //   out put(4) [5, 3, 7, 9]

                //iife function
              

                (function add(arr) {
                    var result = [];
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] % 2 != 0) {
                            result.push(arr[i]);
                        }
                    }
                    console.log(result);
                }
                     )([5,4,3,6,7,8,9])
                //output (4) [5, 3, 7, 9]

                //arrow function
                var add= (arr)=> {
                    var result = [];
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] % 2 != 0) {
                            result.push(arr[i]);
                        }
                    }
                    return result
                }
                     console.log(add([5,4,3,6,7,8,9]))
                     //out put(4) [5, 3, 7, 9]
                     //----------------------------------------------------
                     