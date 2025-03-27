// // function fib(n){
// //     //base case
// //     if(n<=1) return n;
    
// //     //recursive logic
    
// //     return fib(n-1) + fib(n-2);
// // }


// // //fib(n)= fib(n-1) + fib(n-2)

// // console.log(fib(10));



// let arr = [1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4];

// function removeDulpicates(num) {

//     if (num.length === 0) return 0;
//     //edge case
  
//     let i = 0;
  
//     for (let j = 1; j < num.length; j++) {
  
//       if (num[i] !== num[j]) {
  
//         i++;
  
//         num[i] = num[j];
  
//       }
  
//     }
  
//     return arr.slice(0, i + 1);
  
//   }


//   console.log(removeDulpicates(arr));



function check (arr){
  let count =0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]>arr[i+1]){
      count++;
    }
    console.log(count);

  }
  if(count==1){
    return true;
  }
  return false;
}



console.log(check([9, 10, 1,2,3,5, 4,6,7,8]));


//this class ends here