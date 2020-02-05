var readlineSync = require('readline-sync');
var stake = readlineSync.question('Please Enter The amount you want to play:');
var goal = readlineSync.question('Please Enter Your Goal amount:');
var trails = readlineSync.question('Please Enter The number of trails you want to play:');

var cash = 0
var wins = 0
var loose = 0
for (i = 1; i<trails; i++){
    cash = stake			
    while (cash > 0 && cash < goal){
        if (Math.random() < 0.5){
            cash = cash + 1
        }
        else{
            cash = cash - 1
        }
        if (cash == goal){
            wins = wins + 1
        }
        if (cash == 0){
            loose = loose + 1
        }
    }
}

console.log("wins = "+wins)
console.log("loose = "+loose)
console.log("% of game own is =  = "+(wins/trails)*100)
console.log("% of game loose is =  = "+(loose/trails)*100)
