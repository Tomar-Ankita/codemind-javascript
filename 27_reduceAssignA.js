const array_Numbers=[20,11,40,25,37,49,9,90,60,2,19];
const sum = array_Numbers.reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log("Total :",sum);
let result=array_Numbers.filter((element)=>{
return element%5==0;
});console.log("Multiple of 5:",result);
const sum1 = result.reduce( (runningTotal, element)=>{
    return runningTotal + element;
}, 0);
console.log("Sum of reduced array  :",sum1);