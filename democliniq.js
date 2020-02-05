/********************************************************************************************************************
* @Execution : default node : cmd> cliniq management system.js
* @Purpose : To perform operations for clinique management. 
* @description : Maintain a cliniq in which any user can look over doctor's as well patient's details
                 A patient can fix an apointment with a doctor based on his speciality and availibility.
* @overview : oops concepts
* @author : Shakti Prasad Satapathy <shaktiprasadsatapathy96@gmail.com>
* @version : 1.0
* @since : 24-jan-2020
*******************************************************************************************************************/

const fs = require('fs');
const readlineSync = require('readline-sync');


class JsonFileCalling{

    /*
    * @description :  constructor
    * @purpose:   it read the JSON file, parse it, store in a variable and can use globlly
    */

    constructor() {
        this.doctor = JSON.parse(fs.readFileSync("./OOP/Clinique_json/doctors.json"));
        this.patient = JSON.parse(fs.readFileSync("./OOP/Clinique_json/patients.json"));
    }
}

class SearchAndApointment extends JsonFileCalling{

    /*
    * @description :  search Doctor by patient
    * @purpose:   here a user can search a doctor, view his details
    */
  
    searchDoctor(){
        var option4 = readlineSync.question('Please hit 1 to search by name, 2 to search by id, 3 to search by Specialization :'); 
    
        if(option4 == 1){
            var search = readlineSync.question("Please enter your doctor's name: ");
            for (let i = 0; i<(this.doctor.Doctors).length; i++){   // to find whether doctor is available or not
                if(search == this.doctor.Doctors[i].Name){
            
                    console.log(this.doctor.Doctors[i]);
                    this.appointment(i)  
                }
            }
        }else if(option4 == 2){
            var search = readlineSync.question("Please enter your doctor's ID: ");
            for (var i = 0; i<(this.doctor.Doctors).length; i++){
                if(search == this.doctor.Doctors[i].ID){
                   
                    console.log(this.doctor.Doctors[i]);
                    
                    this.appointment(i)
                }
            }
    
        }else if(option4 == 3){
            var search = readlineSync.question("Please enter your doctor's name: ");
            for (let i = 0; i<(this.doctor.Doctors).length; i++){
                if(search == this.doctor.Doctors[i].Specialization){
      
                    console.log(this.doctor.Doctors[i]);               
                    this.appointment(i)
                }
            }
        }else {
            console.log("Sorry You have Enter Wrong choice Please Try again");
        }
    }
    
    /*
    * @description :  fixing appointment with selected doctor
    * @purpose:   here a user can fix an apointment with a doctor and 
    *             will get an auto generated apointment time
    * @param {i}, which contains a key passed from searchDoctor() to continue with correct Doctor. 
    */

    appointment(i){        
        var i = i;
        var d = new Date();
        var time = d.getHours()+":"+d.getMinutes()
        
        if ((this.doctor.Doctors[i].no_of_appointment) < 5 && (this.doctor.Doctors[i].Availability).toLowerCase() == "am"){
            if(time < "11:59"){ 
                this.doctor.Doctors[i].no_of_appointment = this.doctor.Doctors[i].no_of_appointment + 1
                this.doctor.Doctors[i].total_no_op_patient = (this.doctor.Doctors[i].total_no_op_patient)+1
                console.log("Congrats Your Apouintment is successfully saved");
                let timingfrom = 7+(this.doctor.Doctors[i].no_of_appointment)-1 
                let timingto = 7 +(this.doctor.Doctors[i].no_of_appointment)
                console.log("Your Apointmtnt timing is " + timingfrom + " AM to " + timingto + " AM");
                
            }else{
                console.log("Sorry The Doctor Is Not Available For Today");
                
            }  
        }else if((this.doctor.Doctors[i].no_of_appointment) < 5 && (this.doctor.Doctors[i].Availability).toLowerCase() == "pm"){
            if(time > "12:00"){ 
                 
                this.doctor.Doctors[i].no_of_appointment = this.doctor.Doctors[i].no_of_appointment + 1
                console.log("Congrats Your Apouintment is successfully saved");
                let timingfrom = (2+(this.doctor.Doctors[i].no_of_appointment))-1 
                let timingto = 2+(this.doctor.Doctors[i].no_of_appointment)
                
                
                console.log("Your Apointmtnt timing is " + timingfrom + " PM to " + timingto + " PM");
            }else{
                console.log("Sorry The Doctor Is Not Available For Today");
                
            }
        }
        
        else{
            console.log("Sorry This Doctor is not available please Go Fore another one");
        }
    }
  
    /*
    * @description :  search Patient
    * @purpose:   here a user can search a patient, view his details
    */

    searchPatient(){
        var option4 = readlineSync.question('Please hit 1 to search by name, 2 to search by id, 3 to search by mobile number :'); 
    
        if(option4 == 1){
            var search = readlineSync.question("Please enter your patient's name: ");
            for (let i = 0; i<(this.patient.Patients).length; i++){
                if(search == pthis.atient.Patients[i].Name){
                   
                    console.log(patient.Doctors[i]);  
                }
            }
        }else if(option4 == 2){
            var search = readlineSync.question("Please enter your patient's ID: ");
            for (let i = 0; i<(this.patient.Patients).length; i++){
                if(search == this.patient.Patients[i].ID){
                  
                    console.log(patient.Patients[i]);
    
                }
            }
    
        }else if(option4 == 3){
            var search = readlineSync.question("Please enter your patient's Mobile Number: ");
            for (let i = 0; i<(this.patient.Patients).length; i++){
                if(search == this.patient.Patients[i].Mobile_Number){
                   
                    console.log(this.patient.Doctors[i]);
                    
                }
            }
        }else {
            console.log("Sorry You have Enter Wrong choice Please Try again");
        }
    }
}


class Registration extends SearchAndApointment{

   /*
    * @description :  giving user options to login/registration
    * @purpose:   helps to continue with application in correct mennor like whetere current user 
    *             wants to register or login
    * @param {option1}, which contains the key value which helps to continue with application for
    *                   further operetion
    */

    optionS(option1){
        if(option1 == 1){
            var option2 = readlineSync.question('Please hit 1 if You are a patient in and 2 if you are a doctor:');
            if (option2 == 1){
                this.patient_login();
            }else if(option2 ==2){
                this.doctor_login();
            }else{
                console.log("Sorry You have Enter Wrong choice Please Try again");
                
            }
        }else if(option1 == 2){
            Show.prototype.msg = "You Are Successfully Registred"

            var option2 = readlineSync.question('Please hit 1 if You are a patient in and 2 if you are a doctor:');
            if (option2 == 1){
                this.patientsRegistration()
            }else if(option2 ==2){
                this.doctorsRegistration()
            }else{
                console.log("Sorry You have Enter Wrong choice Please Try again");
            }
        }else{
            console.log("Sorry You have Enter Wrong choice Please Try again");
        }
    }

    /*
    * @description :  Patients Registration part covered
    * @purpose:   here a user can register himself as a patient
    */

    patientsRegistration(){
        var name = readlineSync.question('Please Enter Your Name:');
        var id = readlineSync.question('Please Enter An ID:');
        var Mobile_Number = readlineSync.question('Please Enter Your Mpobile Number:');
        var age = readlineSync.question('Please Enter Your Age:');

        let savePdetails = () =>{
            this.patient.Patients.push({
                "Name": name,
                "ID": id,
                "Mobile_Number": Mobile_Number,
                "age": age
            })
            var patient_show = new Show(this.patient.Patients[((this.patient.Patients).length)-1])
            patient_show.show()
        }
        this.save_P_details = () =>{
            savePdetails();
        }
        s.save_P_details()
        
    }

    /*
    * @description :  Doctors Registration part covered
    * @purpose:   here a user can register himself as a doctor
    */

    doctorsRegistration(){
        var name = readlineSync.question('Please Enter Your Name:');
        var id = readlineSync.question('Please Enter An ID:');
        var specialization = readlineSync.question('Please Enter Your Specialization:');
        console.log("NOTE: Selecting AM means timing is 7AM-11AM and PM means 2PM-7PM");
        var availability = readlineSync.question('Please Enter Your Availability in AM or PM:');

        
        let saveDdetails = () =>{
           
            this.doctor.Doctors.push({
                "Name": name,
                "ID": id,
                "Specialization": specialization,
                "Availability": availability,
                "no_of_appointment": 0,
                "total_no_op_patient" : 0
            })
            var doctor_show = new Show(this.doctor.Doctors[((this.doctor.Doctors).length)-1])
            
            doctor_show.show();
        }
        this.save_D_details = () =>{
           saveDdetails();
        }
        s.save_D_details()
        
    
    }

    /*
    * @description :  Patients login part covered
    * @purpose:   here a patient can login himself with this app by providing id
    */

    patient_login(){
        var id = readlineSync.question('Please Enter An ID for Login:');
        
        for (let i = 0; i<(this.patient.Patients).length; i++){
            if(id == this.patient.Patients[i].ID){
                console.log("Congrats... Yoy are successfully Loged in");
                console.log(this.patient.Patients[i]); 
                var option3 = readlineSync.question('Please hit 1 to view all doctors and 2 for search:'); 
                if (option3 == 1){
                    console.log(this.doctor.Doctors);
                    this.mostDemandingDoctor()
                    this.searchDoctor()
                }else if(option3 == 2){
                    this.searchDoctor()
                }else{
                    console.log("Sorry You have Enter Wrong choice Please Try again");
                }
            }else{
                console.log("Sorry No Result Found Please Resester !st Or Check Your Entry");
            }
        }  
    }

    /*
    * @description :  find and showmost Demanding Doctor
    * @purpose:   here a doctor can login himself with this app by providing id
    */

    mostDemandingDoctor(){
        let max = this.doctor.Doctors[0].total_no_op_patient;
        for (let i = 0; i<(this.doctor.Doctors).length; i++){
            if(this.doctor.Doctors[i].total_no_op_patient > max){
                max = this.doctor.Doctors[i].total_no_op_patient
            }
        }
        console.log("NOTE--NOTE--NOTE--NOTE--NOTE--NOTE--NOTE--NOTE--NOTE--NOTE--NOTE--NOTE--\n");
        console.log("NOTE " + max + " is the most demanding doctor till date \n");
        
    }

    /*
    * @description :  Doctors login part covered
    * @purpose:   here a doctor can login himself with this app by providing id
    */

    doctor_login(){
        var id = readlineSync.question('Please Enter An ID for Login:');
        
        for (let i = 0; i<(this.doctor.Doctors).length; i++){
            if(id == this.doctor.Doctors[i].ID){
                console.log("You Are Successfully logged in");
                console.log(this.doctor.Doctors[i]); 
                var option3 = readlineSync.question('Please hit 1 to view all doctors and 2 for search:'); 
                if (option3 == 1){
                    console.log(this.doctor.Doctors);
                    this.searchPatient()
                }else if(option3 == 2){
                    this.searchPatient()
                }else{
                    console.log("Sorry You have Enter Wrong choice Please Try again");
                } 
                
            }else{
                console.log("Sorry No Result Found Please Resester !st Or Check Your Entry");
            }
        }  
    }
    
    /*
    * @description :  write updated json data to json file
    * @purpose:   At the end of the execution this function will help to re-write in the JSON file
    */

    store(){
        
        console.log("********************************************************");
        
        fs.writeFile("./OOP/Clinique_json/doctors.json", JSON.stringify(this.doctor), (err) => {     
            // In case of a error throw err. 
            if (err) throw err; 
        })
        fs.writeFile("./OOP/Clinique_json/patients.json", JSON.stringify(this.patient), (err) => {     
            // In case of a error throw err. 
            if (err) throw err; 
        })
    }
}



var s = new Registration()

/*
* @description :  Constructor class
* @purpose:   here 1 message is added
*/

function Show(result){  
    // this property is called as instance member
    this.result = result;  
    //this.msg = msg     
    this.show = function(){   
        console.log(this.result); 
        console.log(this.msg); 
    }
}
var option1 = readlineSync.question('Please hit 1 for log in and 2 for registration:');
s.optionS(option1)
s.store()


