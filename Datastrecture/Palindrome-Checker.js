class Node {
  constructor(data){
      this.data=data;
      this.next=null;
      this.pre=null;
  }
}
// creared stack class with attribute front and rear
class Queue{
  constructor(){
      this.front=null;
      this.rear=null;
  }
 isEmpty(){
     return !this.front;
 }
/*
* @description : enqueue
* @purpose:   link each data to node at the end of queue.
* @param {data}, which has data information. 
*/
  enqueue(data){
      let node = new Node(data);
      if(this.isEmpty()){
          this.front=this.rear=node;
      }
      else{
          this.rear.next=node;
          node.pre=this.rear;
          this.rear=node;
      }
      //this.print();
  }
/*
* @description : print
* @purpose:   prints data from queue.
* @param {}, which has data information. 
*/
  print(){
      if(this.isEmpty()){
          console.log('empty');
      }
      else{
          var tempArr=[];
          let temp=this.front;
          while(temp){
              tempArr.push(temp.data);
              temp=temp.next;
          }
         console.log(tempArr.join(','));
         
      }
     
  }
    /*
* @description : frontpop
* @purpose:   remove node with data from front of the queue.
* @param {}, which has data information. 
*/
  frontpop(){
      
      let node=this.front;
      if(!this.isEmpty()){
          this.front=this.front.next;
      }
      if(!this.front){
          this.rear=null;
      }
      //this.print();
      
      
      return node;
  }
    /*
* @description : rearpop
* @purpose:   remove node with data from front of the queue.
* @param {}, which has data information. 
*/
  rearpop(){
      
      let node=this.rear;
      if(!this.isEmpty()){
          this.rear=this.rear.pre;
      }
      if(!this.rear){
          this.front=null;
      }
      this.print();
      
      
      return node;
  }
   /*
* @description : addFront
* @purpose:   add node with data to front of the queue.
* @param {data}, which has data information. 
*/

  addFront(data){
      let node = new Node(data);
      if(this.isEmpty){
          this.front=node;
          this.rear=node
      }
      else{
          node.next=this.front;
          this.front.pre=node;
          this.front=node;


      }

  }
  /*
* @description : palindrome
* @purpose:  checks for data in node if same prints palindrome else not.
* @param {}, which has data information. 
*/

  palindrome(){
      while(this.front!=this.rear){
          if(this.front.data!=this.rear.data){
              console.log('string is not palindrome');
              break;
          }
          else{
              this.frontpop();
              this.rearpop();
          }
      }
      if(this.front==this.rear||!this.front){
          console.log('string is palindrome');
      }
  }
}
const read = require('readline-sync');
var string = read.question('Enter word');
console.log(string);
//var newString=[];
var obj = new Queue();
splitString = string.split('');
for (let i = 0; i < string.length; i++) {
    obj.enqueue(splitString[i]);
}
obj.palindrome();