var readlineSync = require('readline-sync');
var number_of_cupon = readlineSync.question('Please Enter The number of distinct cupon you want to generate:');

var arr = [];
while(arr.length < number_of_cupon){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);