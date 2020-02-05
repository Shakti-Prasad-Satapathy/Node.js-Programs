const fs = require('fs');
const readlineSync = require('readline-sync');
var doctor = JSON.parse(fs.readFileSync("./Clinique_json/doctors.json"));
var patient = JSON.parse(fs.readFileSync("./Clinique_json/patients.json"));

var option1 = readlineSync.question('Please hit 1 for log in and 2 for registration:');
if(option1 == 1){
    var option2 = readlineSync.question('Please hit 1 if You are a patient in and 2 if you are a doctor:');
    if (option2 == 1){
        patient_login();
    }else if(option2 ==2){
        doctor_login();
    }else{
        console.log("Sorry You have Enter Wrong choice Please Try again");
        
    }
}else if(option1 == 2){
    Show.prototype.msg = "You Are Successfully Registred"

    var option2 = readlineSync.question('Please hit 1 if You are a patient in and 2 if you are a doctor:');
    if (option2 == 1){
        patientsRegistration()
    }else if(option2 ==2){
        doctorsRegistration()
    }else{
        console.log("Sorry You have Enter Wrong choice Please Try again");
    }
}else{
    console.log("Sorry You have Enter Wrong choice Please Try again");
    
}
/***************Registrarion********************************** */
function patientsRegistration(){
    var name = readlineSync.question('Please Enter Your Name:');
    var id = readlineSync.question('Please Enter An ID:');
    var Mobile_Number = readlineSync.question('Please Enter Your Mpobile Number:');
    var age = readlineSync.question('Please Enter Your Age:');

    patient.Patients.push({
        "Name": name,
        "ID": id,
        "Mobile_Number": Mobile_Number,
        "age": age
    })
    var patient_show = new Show(patient.Patients[((patient.Patients).length)-1])
    //Show.prototype.msg = "You Are Successfully Registred"
    patient_show.show()
}
function doctorsRegistration(){
    var name = readlineSync.question('Please Enter Your Name:');
    var id = readlineSync.question('Please Enter An ID:');
    var specialization = readlineSync.question('Please Enter Your Specialization:');
    var availability = readlineSync.question('Please Enter Your Availability in AM or PM:');

    doctor.Doctors.push({
        "Name": name,
        "ID": id,
        "Specialization": specialization,
        "Availability": availability,
        "no_of_appointment": 0
    })
    var doctor_show = new Show(doctor.Doctors[((doctor.Doctors).length)-1])
    //Show.prototype.msg = "You Are Successfully Registred"
    doctor_show.show();
}
/*****************End of registration************************************** */
/***************************login************************* */
function patient_login(){
    var id = readlineSync.question('Please Enter An ID for Login:');
    
    for (i = 0; i<(patient.Patients).length; i++){
        if(id == patient.Patients[i].ID){
            console.log("Congrats... Yoy are successfully Loged in");
            console.log(patient.Patients[i]); 
            var option3 = readlineSync.question('Please hit 1 to view all doctors and 2 for search:'); 
            if (option3 == 1){
                console.log(doctor.Doctors);
                searchDoctor()
            }else if(option3 == 2){
                searchDoctor()
            }else{
                console.log("Sorry You have Enter Wrong choice Please Try again");
            }
        }else{
            console.log("Sorry No Result Found Please Resester !st Or Check Your Entry");
        }
    }  
}
function doctor_login(){
    var id = readlineSync.question('Please Enter An ID for Login:');
    
    for (i = 0; i<(doctor.Doctors).length; i++){
        if(id == doctor.Doctors[i].ID){
            console.log("You Are Successfully logged in");
            console.log(doctor.Doctors[i]); 
            var option3 = readlineSync.question('Please hit 1 to view all doctors and 2 for search:'); 
            if (option3 == 1){
                console.log(doctor.Doctors);
                searchPatient()
            }else if(option3 == 2){
                searchPatient()
            }else{
                console.log("Sorry You have Enter Wrong choice Please Try again");
            } 
             
        }else{
            console.log("Sorry No Result Found Please Resester !st Or Check Your Entry");
        }
    }  
}
/**********************************End of  login************************************** */
/********************** constructor and prototyping********************************* */

function Show(result){  
    // this property is called as instance member
    this.result = result;  
    //this.msg = msg     
    this.show = function(){   
        console.log(this.result); 
        console.log(this.msg);
        
    }
}

/********************************End of Constructor********************************* */
/***************************************Search Doctor ******************************** */
function searchDoctor(){
    var option4 = readlineSync.question('Please hit 1 to search by name, 2 to search by id, 3 to search by Specialization :'); 

    if(option4 == 1){
        var search = readlineSync.question("Please enter your doctor's name: ");
        for (i = 0; i<(doctor.Doctors).length; i++){
            if(search == doctor.Doctors[i].Name){
                /***************************************** */
                console.log(doctor.Doctors[i]);
                appointment(i)  
            }
        }
    }else if(option4 == 2){
        var search = readlineSync.question("Please enter your doctor's ID: ");
        for (i = 0; i<(doctor.Doctors).length; i++){
            if(search == doctor.Doctors[i].ID){
                /***************************************** */
                console.log(doctor.Doctors[i]);
                appointment(i)
            }
        }

    }else if(option4 == 3){
        var search = readlineSync.question("Please enter your doctor's name: ");
        for (i = 0; i<(doctor.Doctors).length; i++){
            if(search == doctor.Doctors[i].Specialization){
                /***************************************** */
                console.log(doctor.Doctors[i]);
                appointment(i)
            }
        }
    }else {
        console.log("Sorry You have Enter Wrong choice Please Try again");
    }
}
/***************************        End**        ************************* */
/***************************************Make Apointment ******************************** */
function appointment(i){
    var i = i;
    if ((doctor.Doctors[i].no_of_appointment) < 6){
        doctor.Doctors[i].no_of_appointment = doctor.Doctors[i].no_of_appointment + 1
        console.log("Congrats Your Apouintment is successfully saved");  
    }else{
        console.log("Sorry This Doctor is not available please Go Fore another one");
    }
}
/***************************        End**        **************************** */

/***************************************Search Doctor ******************************** */
function searchPatient(){
    var option4 = readlineSync.question('Please hit 1 to search by name, 2 to search by id, 3 to search by mobile number :'); 

    if(option4 == 1){
        var search = readlineSync.question("Please enter your patient's name: ");
        for (i = 0; i<(patient.Patients).length; i++){
            if(search == patient.Patients[i].Name){
                /***************************************** */
                console.log(patient.Doctors[i]);  
            }
        }
    }else if(option4 == 2){
        var search = readlineSync.question("Please enter your patient's ID: ");
        for (i = 0; i<(patient.Patients).length; i++){
            if(search == patient.Patients[i].ID){
                /***************************************** */
                console.log(patient.Patients[i]);

            }
        }

    }else if(option4 == 3){
        var search = readlineSync.question("Please enter your patient's Mobile Number: ");
        for (i = 0; i<(patient.Patients).length; i++){
            if(search == patient.Patients[i].Mobile_Number){
                /***************************************** */
                console.log(patient.Doctors[i]);
                
            }
        }
    }else {
        console.log("Sorry You have Enter Wrong choice Please Try again");
    }
}
/***************************        End**        ************************* */

fs.writeFile("./Clinique_json/doctors.json", JSON.stringify(doctor), (err) => {     
    // In case of a error throw err. 
    if (err) throw err; 
})
fs.writeFile("./Clinique_json/patients.json", JSON.stringify(patient), (err) => {     
    // In case of a error throw err. 
    if (err) throw err; 
}) 
