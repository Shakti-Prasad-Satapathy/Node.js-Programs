var readlineSync = require('readline-sync');
var a=1;
//var user_i = 0;
//var user_j = 0;
/////arr[][]=new int[3][3];
var arr = new Array(3);
for(i=0;i<3;i++) {
    arr[i] = new Array(3);
    for(j=0;j<3;j++) {
        arr[i][j]=a;
        a++;	
    }
}
var counter=1;
while(counter<10) {
    if(counter%2==0) {
        console.log("Enter the position You wants to cross:  ");

        var user_i = readlineSync.question('Please enter 1st index position "i": ')
        var user_j = readlineSync.question('Please enter 2nd index position "j": ')

        if(user_j<0 || user_j>2 || user_i<0 || user_i>2 || arr[user_i][user_j]==0 || arr[user_i][user_j]==-1) 
            console.log("Try another position You wants to cross:  \n");
        else{
            arr[user_i][user_j]=0;	
            counter++;
            //console.log("=========>"+counter)
        }
    }
    else {
        var min=0; 
        var max=3;  
 
        var System_i =Math.floor(Math.random() * (+max - +min)) + +min; 
        var System_j =Math.floor(Math.random() * (+max - +min)) + +min;
        // var System_i = Math.round(Math.random(0,3));
        // var System_j = Math.round(Math.random(0,3));
        
        if(arr[System_i][System_j]>0) {
            //console.log("=============>>>")
            arr[System_i][System_j]=-1;	
            console.log("i= "+System_i+"  ");
            console.log("j= "+System_j);
            counter++;
            //console.log("=========>>>>>>>>>>"+counter)
        }
    }
    
}


if(		arr[0][0]==0 && arr[0][1]==0 &&arr[0][2]==0 || arr[0][0]==0 && arr[1][0]==0 && arr[2][0]==0 || 
        arr[2][0]==0 && arr[2][1]==0 && arr[2][2]==0 || arr[0][2]==0 && arr[1][2]==0 && arr[2][2]==0 ||
        arr[0][0]==0 && arr[1][1]==0 && arr[2][2]==0 || arr[2][0]==0 && arr[1][1]==0 && arr[0][2]==0) {
    console.log("CONGRATS!!! YOU HAVE WON");
}
else{
    console.log("SORRY YOU HAVE LOSE>>> BETER LUCK NEXT TIME");
}

// if(		arr[0][0]==1 && arr[0][1]==1 &&arr[0][2]==1 || arr[0][0]==1 && arr[1][0]==1 && arr[2][0]==1 || 
//         arr[2][0]==1 && arr[2][1]==1 && arr[2][2]==1 || arr[0][2]==1 && arr[1][2]==1 && arr[2][2]==1 ||
//         arr[0][0]==1 && arr[1][1]==1 && arr[2][2]==1 || arr[2][0]==1 && arr[1][1]==1 && arr[0][2]==1) {
//     console.log("SORRY YOU HAVE LOSE>>> BETER LUCK NEXT TIME");
// }