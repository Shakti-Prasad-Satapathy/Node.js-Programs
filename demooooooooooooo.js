//simple constructor esample:
//-------------------------------------------------------
function Mobile(){  //constructor method
    this.model = '123fd';       // we must use this. because this points to the newly created object instance
    this.price = function(){    // we can add a function also
        console.log(this.model + "Is tehe model name")
    }
}
var nokia = new Mobile()    //creating constructor object
nokia.price()       // calling through constructor obj

/* hens here this.model means nokia.model*/

// constructor with parameater
//-----------------------------------------------------

function Mobile(model){  
    // this property is called as instance member
    this.model = model;       
    this.price = function(){   
        console.log(this.model + "Is tehe model name")
    }
}
var nokia = new Mobile('3310')
var oppo = new Mobile('1155')
var vivo = new Mobile('2323')  
/** to add new property like color in nokia obj we can write*/
nokia.color = 'black'   // in this case this property is  available for nokia object only  
// to make it available for all  onjects we cn write as:-> "Classname.prototype.key = 'value' " where prototype is a key
// this property is called as prototype member
Mobile.prototype.color = 'black'
// but this will never reflect in the console
nokia.price()
oppo.price()
vivo.price() 

/*************************************************/
//js Inheritance
//----------------------------------
// some built-in class are Date, String, Array

class Father {
    showFatherData(){
        console.log("Inside Perent")
    }
}
class Son extends Father{
    showSonData(){
        console.log("Inside child")
    }
}

var s = new Son()
console.log(s.showFatherData())
console.log(s.showSonData())

//multy level inheritance in js
class Father{
    constructor() {
        const fs = require('fs');
        this.doctor = JSON.parse(fs.readFileSync("./OOP/Clinique_json/doctors.json"));
        this.patient = JSON.parse(fs.readFileSync("./OOP/Clinique_json/patients.json"));
        // this.a = 10;
        // this.b = 20;
    }
}
class Son extends Father{
    constructor(){
        super()
        this.a = 10;
        this.b = 20;
    }
    showS(){
        console.log(this.doctor);
    }
}
class GSon extends Son{
    
    showG(){
        var a = this.a;
        var b = this.b;
        console.log(this.patient);
        console.log(a+b)
    }
}
class GGSon extends GSon{
    
    showGG(){
        var a = this.a;
        var b = this.b;
        console.log(this.patient);
        console.log(a+b)
        console.log("------------===================------------");
        
    }
}
var s = new GGSon()
//s.showF()
s.showS()
s.showGG()

/********************************Abstraction******************************* */

function Employee (name, age, basesalary){
    this.name = name;
    this.age = age;
    this.basesalary = basesalary;

    let monthlybonous = 1000
    let calculateFinalSalary = () =>{
        let finalsalary = basesalary + monthlybonous;
        console.log("final salary is " + finalsalary);
    }
    this.getEmpdeails = () => {
        console.log("name: " + this.name + " age: " + this.age);
        calculateFinalSalary();
        
    }
}

/***************************Encapsuletion************/// */

class Employee{
    setEmpDetails(name, id, ph_no){
        this.name = name;
        this.id = id;
        this.ph_no = ph_no;
        
    }
    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPh_no(){
        return this.ph_no;
    }
}
let emp1 = new Employee()
emp1.setEmpDetails("tiks", 1001, 1234567890);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPh_no());

/********Toget cuttent time********* */
var d = new Date();
var time = d.getHours()+":"+d.getMinutes()


// var today = new Date();
// Get current date from Date object in Y-m-d format.

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// Get current time from Date object in H:i:s format.

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// Get current date and time from Date object in Y-m-d H:i:s format.

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;


var data = " Initial State";
setTimeout(function(){
    data = "New State"
    console.log("inside new state\n" + data); 
},3000)
console.log(data);

var data = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("new state")
    },3000)
})
data.then(function(data){
    console.log(val);
    
})

/*************************promise example 2***************** */
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})


/**************************promise example 3 example********************* */
console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()


/******************map() in js *********************** */

var arr = [10,20,30,40,50];
var newArr = arr.map(function(value){
// var newArr = arr.map(function(value, i){ // it will find and show by index
// value++; // it will does the same if we work with value only
    console.log(value);
    // console.log(value, i);
});
/******************map() in js example-2 ********** */

var arr =[
    { price : "100", product : "mobile"},
    { price : "200", product : "pc"},
    { price : "300", product : "mouse"},
    { price : "400", product : "bluetooth"}
];
var newArr = arr.map(function(value){
    return value.product;
});
console.log(newArr);

/***********local storage in js ********************* */
window.localStorage.setItem('username','shakti');
window.localStorage.setItem('usernicname','tikun');
console.log(localStorage.length);
console.log(localStorage.getItem('username'));  // display the value for username(key) stored in the local storage
console.log(localStorage.getItem(0));  // display the value for key stored in the local storage at 0th index
console.log(localStorage.key(0));  // display the key name stored in the local storage at 0th(provided in argument) index
localStorage.removeItem('username'); //this will remove the key/value pair where key = username from localStorage
localStorage.clear();   // This will remove all key value pair from the local storage

/*************** join () in array in js**********************/// */
var a = ["A", "B", "C", "D"];
var new_a = a.join("/");
console.log(new_a);

/**************** forEach loop in js /******************** */ 
var a = ["A", "B", "C", "D", 8, 6, 5];
a.forEach(function(value, index){
    console.log(value + " " + index);
})


/****************** filter() in js ********************/
var ages = [50, 12, 19, 20, 55];
console.log(age + "  ");

var b = ages.filter(checkAdult);
console.log(b + "   ");
function checkAdult(age){
    return age >= 18;
}



