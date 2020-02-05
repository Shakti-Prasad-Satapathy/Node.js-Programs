var readlineSync = require('readline-sync');

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;

    }
}
class Bank{

    constructor(){
        this.head = null;
    }
    
    insertLast(data){
        let node = new Node(data);
        let current;

        if (!this.head){
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next  = node;            
        }
    }
    
    removeData(){
        let current = this.head;
        this.head = current.next;     
        if (!this.head){
            flag = 1;
        } 
    }
}

const ll = new Bank();
var noofcustomer = readlineSync.question('Please Enter The number of customer ');
var flag = 0;
var bankbalance = 100000;

for (i=1; i<=noofcustomer; i++){
    ll.insertLast(i);
}

while (flag == 0){
    var option = readlineSync.question('Please Enter 1 for withdraw and 0 for deposit ');
    if(option == 1){
        var option1 = readlineSync.question('Please Enter The Amount You wants To withdraw ');
        if(bankbalance > option1){
            bankbalance = bankbalance - option1;
            console.log(bankbalance+"===========>");
            
        }
        else{
            console.log("Sorry This Bank Don't Have that much amount");
        }
        ll.removeData();
    }
    else if(option == 0){
        var option1 = readlineSync.question('Please Enter The Amount You wants To Deposit ');
        bankbalance = bankbalance + option1;
        ll.removeData();
        
    }
    else{
        console.log("Sorry You Have Entered A Wrong Cahoice");
        
    }
}