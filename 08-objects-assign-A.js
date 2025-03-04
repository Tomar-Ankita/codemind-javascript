const professor={
   Name:  "Apurva Singh",
   Age: 30 ,
   Subject: "English",
   Experience:"5 years",
   Salary: 40000,



degree: {
  Engineering:"CSC",
  PHD:" Adv Computing",
  Bachelors:"BCA",
},
certificates:[
"Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming"
]
};
console.log(professor);
console.log("======================================================================");
console.log(professor.degree);
console.log("======================================================================");
console.log(professor.certificates);
console.log("======================================================================");




professor.totalExperience="14 years";
professor.degree.Bachelors="BBA";
professor.certificates.splice(2,0,"Oracle certified")

console.log(`Last element of an array:  ${professor.certificates[professor.certificates.length-1]}`);


console.log("=======================================================")
for (const key in professor) {
    
       console.log(`${key}:`,professor[key]);
       
        
    }
