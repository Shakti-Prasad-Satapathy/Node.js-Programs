var readlineSync = require('readline-sync');
var num = readlineSync.question('Please Enter a number:  ');
var result = 0;
for (i = 1; i<=num; i++){
    result = result + 1 / i ;
}
console.log(result)
