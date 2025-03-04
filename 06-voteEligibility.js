var voteEligible = function(age){
    if (age==0|| age>=130|| age<0||age==null)  {
        console.log(` Age: ${age}  Invalid data`);
        
    } else {
        
    
if (age>=18) {
    console.log(` Age: ${age}  Eligible for voting`);
    
} else {
    console.log(` Age: ${age}  Not Eligible for voting `);
}  
}
}
voteEligible( 45);
voteEligible( 18);
voteEligible( 17);
voteEligible( 20);
voteEligible( -10);
voteEligible( 200);
voteEligible( 0);
voteEligible( null);