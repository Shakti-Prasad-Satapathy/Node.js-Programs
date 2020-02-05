var readlineSync = require('readline-sync');
var year = readlineSync.question('Please Enter the year to check:  ');
if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
    console.log(year+' is a leap year');
}
else{
    console.log(year+' is not a leap year');
}