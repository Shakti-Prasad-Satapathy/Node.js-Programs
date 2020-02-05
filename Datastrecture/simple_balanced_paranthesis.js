var readlineSync = require('readline-sync');

var str = readlineSync.question('Please enter any equation: ');
stack = []
var res = str.split("");
var flag = 0;

for(i = 0; i<res.length; i++){
    if(res[i] == "("){
        stack.push("(")
    }
    if(res[i] == ")"){
        if (stack.length == 0){
            //console.log("sorry you have entered a wrong equation <<<<<++++++++>>>>>>")
            flag++;
        }
        else{
            stack.pop("(");
        }
    }
}
if (stack.length == 0 && flag == 0){
    console.log("Congrats you have entered a good equation")
}
else{
    console.log("sorry you have entered a wrong equation")  
}
