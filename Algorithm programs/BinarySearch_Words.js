var readlineSync = require('readline-sync');
var words = [ "Books", "Pens", "Pencils", "Notebooks", "cat", "Dog" ,"School" ];
for (i=0; i<words.length;i++) {
    words[i]=words[i].toLowerCase();
}
words.sort();
//console.log(words)

var str = readlineSync.question('Please enter the word you wants to search:  ');
var max = words.length - 1;
var mid = 0;    var min = 0;    var result = 0;
//var str = "book";
while (min <= max) { 
 
    mid = Math.floor((max + min) / 2);
    //console.log(mid)
    result = str.localeCompare(words[mid]); 
     
    if (result == 0) // Check if x is present at mid
        console.log("word found at index = " + mid)
    
    else if (result > 0) // If x greater, ignore left half 
        min = mid + 1; 

    else if (result < 0)// If x is smaller, ignore right half
        max = mid - 1;

    else  
        console.log("word not found");
} 
