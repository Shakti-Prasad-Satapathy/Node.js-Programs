var fs = require('fs');
var arr1 = new Array();
var readlineSync = require('readline-sync');

fs.readFile('/home/administrator/Desktop/test.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
    //console.log(data); 
    var result = data.split(/[ ,.?:;]+/);

    class Node{
        constructor(data, next = null){//, prev = null){
            this.data = data;
            this.next = next;
            //this.prev = prev;
        }
    }
    
    class UnorderedList{
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
                arr1.push(current.next.data)
                
            }
        }
        
        addData(data){
            //let arr2 =new Array();
            let node = new Node(data);
            let current = this.head;
            while (current.next != null){ // traversing the list till end
                arr1.push(current.data);
                current = current.next
            
            }
            current.next  = node;
            arr1.push(current.next.data);
            //console.log("===========>>>>>>"+arr1)
        }
        removeData(data){
            //let arr2 =new Array();
            let current = this.head;
            //let prev = this.current;
            if (current.data == data){
                this.head = current.next;
            }
            while (current.next != null){
                if (current.data == data){
                    current = current.next
                }
                arr1.push(current.data);
                current = current.next   
            }
            arr1.push(current.data);
            //console.log(arr1);
            
        }
        checkListData(str){
            let current = this.head;
            var count = 0;
            while (current){
                //console.log(current.data)
                if (str == current.data){
                    ll.removeData(current.data);
                }
                else{
                    count = count + 1;
                }
                current = current.next;
            }
            if (count !=  result.length){
                ll.insertLast(str);
            }
        }
    }
        //to calll printListData method

    const ll = new UnorderedList();

    for (i = 0 ; i<result.length; i++){
        ll.insertLast(result[i]);
    }
    //console.log("=========>"+arr1)
    
    var str = readlineSync.question('Please Enter The Word to Check  ');
    ll.checkListData(str);
    //console.log(arr2)

})