var input = require('readline-sync');


//created node class with attributes data and next
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// creared stack class with attribute size,table,length
class Hash {
    constructor(l) {
        this.table = [];
        this.table.length = l;
        this.size = 0;
    }

    /*
    * @description : position
    * @purpose:   calculated position to store data
    * @param {data,size+1}, which has data information. 
    */
    position(x, s) {
        var rem = x % s;
        return rem;
    }

    /*
    * @description :  insert
    * @purpose:   insert user input value at their remainder position
    * @param {data}, which has data information. 
    */
    insert(value) {
        this.size++;
        var newNode = new Node(value);
        var pos = this.position(value, this.table.length);
        var temp = this.table[pos];
        if (this.table[pos] == null) {
            this.table[pos] = newNode;
            return true;
        }
        else {
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
            return true;
        }
    }

    /*
    * @description : disp
    * @purpose:   display hash table and postions of number stored at
    * @param {}, which has data information. 
    */
    disp() {
        for (let i = 0; i < this.table.length; i++) {
            let string = 'position ' + i + ' : ';
            var b = this.table[i];
            let c = 0;
            while (b != null) {
                if (c == 0) {
                    string = string + '   ';
                    c = 1;
                }
                string = string + b.data;
                if (b.next != null)
                    string = string + '   ';

                b = b.next;
            }
            console.log(string);
        }
    }


    getSize() {
        return this.size;
    }
}

var size = input.questionInt('Enter the size of the hashsh Table');
var hash = new util(size + 1);
hash.insert(77);
hash.insert(44);
hash.insert(55);
hash.insert(26);
hash.insert(93);
hash.insert(17);
hash.insert(31);
hash.insert(20);
hash.insert(54);
// console.log('Size is ' + hash.getSize());
hash.disp();