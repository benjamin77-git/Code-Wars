let input = [
    1,   2,   3,  4,   5,   6,
    7,   8,   9, 10, -11, -12,
  -13, -14, -15
];
function countPositivesSumNegatives(input) {
    // your code here
    if (!input || input.length === 0){
      return [];
    }
    let sum=0;
    let add=0;
    for (let i = 0 ; i < input.length; i++){
      if(input[i]<0){
      add+=input[i];  
      }else if(input[i]>0){
        sum++;  
      }
     }
    return [sum,add];
  }