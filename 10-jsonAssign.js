// Store JSON data inside backticks
let emp = `
{
  "name": "Aleix Melon",
  "id": "E00245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
  },
  "referred-by": "E0012"
}
`;


let obj = JSON.parse(emp);
console.log(obj);
console.log(`Type : ${typeof obj}`);
console.log("================================");

console.log(`ROLE: ${obj.role[0]}`); 
let split=obj.name.split(" ");
console.log(`Full name: ${split}`);
let split1=obj.name.split(" ")[1];
console.log(`Last name: ${split1}`);
console.log(`DOJ: ${obj.doj}`);
let split3=obj.doj.split("-")[2];
console.log(`Only Year: ${split3}`);





