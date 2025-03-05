let arrow = ()=>{
    console.log("Good Morning,Today is Wednesday");
    
} 
arrow();
let args=(m,n,o=1)=>{
let multiply=m*n*o;
console.log(`Multiplication of numbers is : ${multiply}`);
}
args(5,5,2);
args(10,4);
let return1 =(a, b ,c, d, e)=>{
    let add=a+b+c+d+e;
    return add;
}
let sum=return1(100,100,200,349,756);
console.log(`Sum of the numbers is : ${sum}`);
let array=return1("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`String: ${array}`);








