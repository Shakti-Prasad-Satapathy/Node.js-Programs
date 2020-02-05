var readlineSync = require('readline-sync');
var n = readlineSync.question('Please Enter any decimal number:');

    // array to store binary number 
    var binaryNum = [];
    var binary = []; 

    // counter for binary array 
    var i = 0; 
    while (n > 0) { 
        // storing remainder in binary array 
        binaryNum[i] = n % 2; 
        n = Math.floor(n / 2); 
        i++; 
    } 
    binaryNum = binaryNum.reverse();
    console.log("After Converting The Inputed Number To Decimal: "+binaryNum)
    // printing binary array in reverse order 
    // for (j = i - 1; j >= 0; j--) {
    //     console.log(binaryNum[j]);
    // }

    for(i = 0; i< (8 - binaryNum.length); i++){
        binary.push(0);
    }
    
    for(i = 0; i< binaryNum.length; i++){
        binary.push(binaryNum[i]);
    }
    //console.log(binary)

    var temp, count = 4;
    for(i = 0; i<4; i++){
        temp = binary[i];
        binary[i]=binary[count];
        binary[count] = temp;
        count++;
    }
    console.log("After Doing The NibbleSwap: "+binary)

    var num = "";
    binary.toString(); 
    for (i = 0; i < binary.length; i++){
        num = num+binary[i]
    }
    //console.log(">>>>>>>>>><<<<<<<<<<<"+num);
    
    var dec_value = 0; 

    // Initializing base 
    // value to 1, i.e 2^0 
    var base = 1; 

    temp = num; 
    while (temp > 0) { 
        var last_digit = temp % 10; 
        temp = Math.floor(temp / 10); 
        dec_value += last_digit * base; 
        base = base * 2; 
    } 
    console.log("After Converting Binary Nibble To Decimal: "+dec_value);
    
    
