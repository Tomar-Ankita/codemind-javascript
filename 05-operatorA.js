function squareOfWordLength(num){
console.log(`Length of word:${num.length}`);
var result = num.length  *num.length;
console.log(`Square of word's length:${result}`);

return squareOfWordLength;

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");
function name(){
    var str = "I am UI Developer";
    console.log(`Length of given string is : ${str.length}`);
    var splitResult = str.split(" ");

console.log(`Length after split is:${splitResult.length}`);
var divide = str.length/splitResult.length;
console.log(`Division result: ${divide}`);
var multiply = str.length * splitResult.length;
console.log(`Multiplication result is : ${multiply}`);



 
    
    
}
name();