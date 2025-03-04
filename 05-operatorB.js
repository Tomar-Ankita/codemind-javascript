var greaterNumber = function(num1,num2){
var result = num1>num2?num1:num2;
console.log(` Greater number is: ${result}`);

}
greaterNumber(10, -10);
greaterNumber(800, 899);
//====new function====//
 var isEvenOrOdd= function(num1){
var result = num1%2==0? true:false;
return result;
};
var returnValue = isEvenOrOdd(29);
console.log(`Given number is even: ${returnValue}`);

var returnValue = isEvenOrOdd(44);
console.log(`Given number is even: ${returnValue}`);

 var returnValue = isEvenOrOdd(0);
 console.log(`Given number is even:${returnValue}`);
 
var returnValue = isEvenOrOdd(101);
console.log(`Given number is even: ${returnValue}`);
 
 function wordLength(string){
     console.log(`Length of word: ${string.length%2==0? "Even":"Odd"}`);
    
 }
 wordLength("JavaScript");
 wordLength("Developer");
wordLength("Google")