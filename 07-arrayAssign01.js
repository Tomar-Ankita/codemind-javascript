const fruit_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`First element:   ${fruit_seasonal[0]},   Last element:  ${fruit_seasonal[fruit_seasonal.length-1]}`);
console.log("----------------------------------------------------");

fruit_seasonal.splice(0,0,"Papaya");
console.log(`New array :     ${fruit_seasonal}`);
console.log("----------------------------------------------------");

fruit_seasonal.splice(4,1);
console.log(`After removing Mango:  ${fruit_seasonal}`);
console.log("----------------------------------------------------");

fruit_seasonal.push("Pineapple");
console.log(`After adding Pineapple:  ${fruit_seasonal}`);
console.log("----------------------------------------------------------------------");

fruit_seasonal.splice(4,0,"Dragon Fruit");
console.log(`Array after adding Dragon fruit: ${fruit_seasonal}` );
console.log("------------------------------------------------------------------------");

fruit_seasonal[fruit_seasonal.indexOf("Orange")] = "Kiwi";
console.log(`After replacing Orange with Kiwi:   ${fruit_seasonal}`);
console.log("----------------------------------------------------------------------");

console.log(`Print values from index 1-4:  ${fruit_seasonal.slice(1,5)}`)
console.log("-------------------------------------------------------------------------");

console.log(`Last Three elements:   ${fruit_seasonal.slice(-3)}`);






