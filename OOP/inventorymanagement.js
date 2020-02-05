const fs = require('fs');
const readlineSync = require('readline-sync');

var content = JSON.parse(fs.readFileSync("/home/administrator/Desktop/Shakti/OOP/inventory.json"));
//console.log(content.Rice[0].Name);

var total;
for(i = 0; i<3; i++){
    total = content.Rice[i].Weight * content.Rice[i].Price_per_kg
    console.log("Total price of "+content.Rice[i].Name+" is "+total)
}
for(i = 0; i<3; i++){
    total = content.Pulses[i].Weight * content.Pulses[i].Price_per_kg
    console.log("Total price of "+content.Pulses[i].Name+" is "+total)
}
for(i = 0; i<3; i++){
    total = content.Wheats[i].Weight * content.Wheats[i].Price_per_kg
    console.log("Total price of "+content.Wheats[i].Name+" is "+total)
}