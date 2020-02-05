
var readlineSync = require('readline-sync');
var num = readlineSync.question('Please Enter the number of which you wants to find prime fector:  ')
for (i = 2; i<=num; i++){
    while(num % i == 0){
        console.log(i)
        num = num / i
    }
    if (num > 2){
        console.log(num);
    }
}