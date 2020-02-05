var readlineSync = require('readline-sync');

var s = ""
//var s1 = "   "
var s2 = "==="
var s3 = "||"
var p = 1
var str1 = ""
var str2 = ""


for (var k = 0; k< 9; k++){ //total no of play    
    for(j = 0; j<5; j++){   // row
        if (j%2 == 0){  
            for(i = 1; i<6; i++){   // coloumn
                if (i%2 != 0){ 
                    if (p == option && k%2 != 0){
                        s = s + " X "
                        p++
                    } else if (p == option && k%2 == 0 ){  
                        s = s + " @ "
                        p++
                    } else{ 
                        if(str1.includes(p)){
                            s = s + " X "
                            p++
                        }else if(str2.includes(p)){
                            s = s + " @ "
                            p++
                        
                        }else{ 
                            s = s + " " + p + " "
                            p++
                        }
                    }
                }
                else {
                    s = s + s3
                }
            }
            console.log(s)
            s = ""
        }else{
            for(i = 1; i<6; i++){
                if (i%2 != 0){
                    
                    s = s + s2
                }
                else {
                    s = s + s3
                }
                //console.log(s);
                //s = ""
                
            }
            console.log(s)
            s = ""
        }
    }

    
    console.log("=======================================================================");
    
    if (k%2 == 0 ){ 
        var option = readlineSync.question('USER 1:=>Please Enter the position:  ');
    } else{
        var option = Math.floor(Math.random() * 10);
        // option = option + ""

        // if(arr.indexOf(r) === -1) arr.push(r);
    }
    if(

        ((str1.includes("1")) && (str1.includes("2")) && (str1.includes("3")))  ||
        ((str1.includes("4")) && (str1.includes("5")) && (str1.includes("6")))  ||
        ((str1.includes("7")) && (str1.includes("8")) && (str1.includes("9")))  ||
    
        ((str1.includes("1")) && (str1.includes("4")) && (str1.includes("7")))  ||
        ((str1.includes("2")) && (str1.includes("5")) && (str1.includes("8")))  ||
        ((str1.includes("3")) && (str1.includes("6")) && (str1.includes("9")))  ||
        
        ((str1.includes("1")) && (str1.includes("5")) && (str1.includes("9")))  ||
        ((str1.includes("7")) && (str1.includes("5")) && (str1.includes("3")))  
        
        ){
        console.log("User 1 Wins");
        k = 10;
    } else if(
    
        ((str2.includes("1")) && (str2.includes("2")) && (str2.includes("3")))  ||
        ((str2.includes("4")) && (str2.includes("5")) && (str2.includes("6")))  ||
        ((str2.includes("7")) && (str2.includes("8")) && (str2.includes("9")))  ||
    
        ((str2.includes("1")) && (str2.includes("4")) && (str2.includes("7")))  ||
        ((str2.includes("2")) && (str2.includes("5")) && (str2.includes("8")))  ||
        ((str2.includes("3")) && (str2.includes("6")) && (str2.includes("9")))  ||
        
        ((str2.includes("1")) && (str2.includes("5")) && (str2.includes("9")))  ||
        ((str2.includes("7")) && (str2.includes("5")) && (str2.includes("3")))  
        
        ){   console.log("User 2 Wins");
        k = 10
    }else{
        
    }
    p = 1
    if (str1.includes(option) || str2.includes(option)){
        console.log("This Place is already taken Please Try again");  
        k = k-1
    }
    if (k%2 == 0){
        str1 = str1 + option
    }
    if(k%2 != 0){
        str2 = str2 + option
    }
        
}
