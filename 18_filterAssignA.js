const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
let filter=arrayNumbers.filter((element)=>{
return element>=50;
    
});
console.log("Integers greater than 50:" ,  filter);

console.log("****************Even numbers*****************");
let even=arrayNumbers.filter((element)=>{
    return element%2==0;
});
console.log("Even numbers:", even);

console.log("****************Odd numbers*****************");
let odd=arrayNumbers.filter((element)=>{
    return element%2!==0;
});
console.log("Odd numbers:", odd);

console.log("******M***********Multiple of 5*********************");

    let multiple=arrayNumbers.filter((element)=>{
        return element%5==0;
    });
    console.log("Multiple of 5 :",multiple );
    
   console .log("*****************Numbers between 20 an 50*********************");
let num=arrayNumbers.filter((element)=>{
return element>20&&element<50;
});
console.log("Numbers between 20 an 50:",num);
