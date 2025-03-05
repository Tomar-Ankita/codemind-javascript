const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((Element,index) =>{
console.log(`Element: ${Element}, index: ${index}`);

});
console.log("****************************************");
const positive=[];
arrayNumbers.forEach(num=>{
if(num>=0)
    
console.log(`Positive integers: ${num} `);
});


console.log("****************************************");
const negative=[];
arrayNumbers.forEach(num=>{
if(num<=0)
    negative.push(num)
});
console.log(` New array with Negative integers: ${negative} `);

console.log("****************************************");
const even=[];
arrayNumbers.forEach(num=>{
if(num%2==0)
    
even.push(num);
});
console.log(` New array with even integers: ${even}`);
console.log("****************************************");
let sum= 0;
arrayNumbers.forEach(num=>{
sum=sum+num;
});
console.log(`Sum of all elements: ${sum}`);

console.log("****************************************");
const evenIndex=[];
arrayNumbers.forEach((num,index)=>{
if(index%2==0)
    evenIndex.push(num)
});
console.log(` Array with even indexed value: ${evenIndex} `);
