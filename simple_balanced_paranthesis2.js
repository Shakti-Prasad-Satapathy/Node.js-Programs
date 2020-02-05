var readlineSync = require('readline-sync');

var str = readlineSync.question('Please enter any equation: ');
var stack = []
var res = []
res = str.split("");
var flag = 0;



for(i = 0; i<res.length; i++){
    //console.log("-------------"+res[i]);
    if(res[i] == "(" || res[i] == "{" || res[i] == "["){  
        stack.push(res[i])
    }
    if(res[i] == ")" || res[i] == "}" || res[i] == "]"){
        
        let x = stack.pop();

        if(res[i] == ")" && x == "(" || res[i] == "}" && x == "{" || res[i] == "]" && x == "["){

        }else if (stack.length == 0){
            flag++
        }else{
            flag++
        }
    }

}
if (stack.length == 0 && flag == 0){
    console.log("Congrats you have entered a good equation")
}
else{
    console.log("sorry you have entered a wrong equation")  
}



