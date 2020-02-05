var readlineSync = require('readline-sync');
var row = readlineSync.question('Please Enter the number of rows   :  ');
var coll = readlineSync.question('Please Enter the number coloumns   :  ');
var arr = new Array(row);
var values = 0;
console.log("please enter "+ row*coll + " no of inputs");
for (i = 0; i<row; i++){
    arr[i] = new Array(coll);
    for (j = 0; j<coll; j++){
        values = readlineSync.question('Please Enter the values   :  ');
        arr[i][j]= values;
    }
}
console.log(arr);
