function stringHandsOn(){
var str = "   Hey you are doing good, keep it up    ";
console.log(`Given code is:${str}`);
console.log(`Length of string is:${str.length}`);
var trimResult = str.trim();
console.log(`Length of string after trim:  ${trimResult},Length of string: ${trimResult.length}`);
console.log(`Number of  removed spaces:${str.length-trimResult.length}`);
console.log(`First character is:${trimResult.charAt(0)},    Last character is : ${trimResult.charAt(trimResult.length-1)}`);
var words = trimResult.split("");
console.log(`Total words:${words.length}`);
console.log(`Index of word good is:${trimResult.indexOf("good")}`);
console.log(`Substring starting with index 24 is : ${trimResult.substring(22)}`);
console.log(`Result ends with up: ${trimResult.endsWith("up")}`);
console.log(`Result starts with Hey: ${trimResult.startsWith("Hey")}`);







}
stringHandsOn();