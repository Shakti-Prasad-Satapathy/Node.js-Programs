var readlineSync = require('readline-sync');
var amount = readlineSync.question('Please Enter The amount:');
var remender=0;
var quotient=0;
remender=(amount%1000);
quotient=Math.floor(amount/1000);
console.log(quotient+" nos of 1000 rs");
quotient=remender;

remender=(remender%500);
quotient=Math.floor(quotient/500);
console.log(quotient+" nos of 500 rs");
quotient=remender;

remender=(remender%100);
quotient=Math.floor(quotient/100);
console.log(quotient+" nos of 100 rs");
quotient=remender;

remender=(remender%50);
quotient=Math.floor(quotient/50);
console.log(quotient+" nos of 50 rs");
quotient=remender;

remender=(remender%10);
quotient=Math.floor(quotient/10);
console.log(quotient+" nos of 10 rs");
quotient=remender;

remender=(remender%5);
quotient=Math.floor(quotient/5);
console.log(quotient+" nos of 5 rs");
quotient=remender;

remender=(remender%2);
quotient=Math.floor(quotient/2);
console.log(quotient+" nos of 2 rs");
quotient=remender;

console.log(quotient+" nos of 1 rs require");
