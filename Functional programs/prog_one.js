/*
\n	new line
\r	carriage return
\v	vertical tab
\t	tab
\b	backspace
\f	form feed

// Returns addition of two numbers
exports.add = function (a, b) {
    console.log(a+b)
    //return a+b;
    
}; 
 
// Returns difference of two numbers
exports.subtract = function (a, b) {
    return a-b;
}; 
 
// Returns product of two numbers
exports.multiply = function (a, b) {
    return a*b;
}; 
var names = ["Ram", "Shyam", "Alice", "Bob"]
//undefined
for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
this.add(5,20)


var readlineSync = require('readline-sync');
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var myData = [];
for(i=0; i<5; i++){
    console.log(i)
    myData.push(i);
}
console.log(myData)

var j = "this is a test"
var k =  j.indexOf("is");
console.log(k);

var s = "this is a test string.".substr(19, 3);
var s1 = "this is a test string.".slice(19, 22);
console.log(s);
console.log(s1);

var s2 = "a|b|c|d|e|f|g|h".split("|");
console.log(s2);


var myarray=[]
for (i=0; i <6; i++){
    myarray[i]=new Array(3)
    for (ii=0; ii <=6; ii++){
        myarray[i][ii]=ii
        //myarray[i].push(ii)
    }
}
console.log(myarray)
console.log("==================================================================")

var myarray=[4]
for (i=0; i <6; i++){
    // myarray[i]=[3]
    for (ii=0; ii <=6; ii++){
        //myarray[i][ii]=ii
        //myarray[i].push(ii)
    }
}

console.log(myarray)
var x= 8795555
var y = 943
x= x.toString()
y = y.toString()
console.log(x+y)

console.log(x.length)
/* *************************************************************************************** /
var fs = require('fs');
//var read = require('readline-sync')

fs.readFile('/home/administrator/Desktop/test.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
    console.log(data); 
})
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('/home/administrator/Desktop/test.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 
***************************************************************************************/


/*
var fs = require('fs');
var filedata;
fs.readFile('/home/administrator/Desktop/test.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    if (data) {
        filedata = data;

    }
})
console.log(filedata);
***********************************************************************************/

/*
printListData(){
    let current = this.head;
    while (current){
        console.log(current.data)
        current = current.next;
    }
}*/
/*
//to calll printListData method

const ll = new LinkedList();
ll.printListData();

*/
var str = "   How     are,,you.  , doing? / today  ";
var res = str.split(/[ ,.?:;]+/);
console.log(res)
