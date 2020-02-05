const fs = require('fs');
const readlineSync = require('readline-sync');

var content = JSON.parse(fs.readFileSync("/home/administrator/Desktop/Shakti/Addressbook.json"));
console.log(content.name);
//content.book.push("nfgkljnk": "fklgnj")
//content.book[0]["namee"] = "kjshdjfkjsndfkj"//.nameee = "Tikunssssss"
//content.age = ""
//console.log(content.book.length);


// fs.writeFile("/home/administrator/Desktop/Shakti/inventory.json", JSON.stringify(content), (err) => {     
//     // In case of a error throw err. 
//     if (err) throw err; 
// }) 



var flag = "sps";
while (flag == "sps") {
    console.log("NOTE: Enter 1 For Create new Address Book and 2 For Continue With Existing One And 'x' for Exit");
    var option1 = readlineSync.question('Please Enter Your Choice:');
    
    if (option1 == '1') {
        newAddressBook();
    } else if (option1 == '2') {
        oldAddressBook();
    } else if (option1 == 'x') {
        flag = 'x';
    } else {
        console.log("Sorry You Have Entered A Wrong Choice Please Try Again");
    }
    function newAddressBook() {

        console.log("Please Enter All Asking Details");

        var new_book = readlineSync.question('Please Enter The New Book Name:');

        var first_name = readlineSync.question('Please Enter Your First Name:');
        var middle_name = readlineSync.question('Please Enter Your Middle Name:');
        var last_name = readlineSync.question('Please Enter Your Last Name:');
        var address = readlineSync.question('Please Enter Your Address:');
        var city = readlineSync.question('Please Enter Your City:');
        var state = readlineSync.question('Please Enter Your State:');
        var zip = readlineSync.question('Please Enter Your ZIP Code:');
        var phone_number = readlineSync.question('Please Enter Your Phone Number:');
        
        content[new_book+''] = [];
        content[new_book].push({
            "First_Name": first_name,
            "Middle_Name": middle_name,
            "Last_Name": last_name,
            "Address": address,
            "City": city,
            "State": state,
            "ZIP": zip,
            "Phone_Number": phone_number
        })
        console.log(content);
    }
    
    function oldAddressBook(){

        var disp = readlineSync.question('Please Enter The old Book Name To Access :');
        if(content[disp]){
            //console.log(content[disp]);    
               
            var option2 = readlineSync.question('Hit 1 to View The Old Address Book and 2 for Edit and 3 For Delete:');
            //console.log(content[disp]);
            if(option2 == 1){
                console.log(content[disp]);    
            }else if(option2 == 2){
                //console.log();
                var option3 = readlineSync.question('Press 1 to edit 1st name, 2 for middle name , 3 for last name, 4 for edit address 5 for city, 6 for state 7 for zip and 8 for phone number :');
                if(option3 == 1){
                    //console.log("=====>"+content[disp][0].First_Name);
                    
                    var edit = readlineSync.question('Please Enter The Modified Value :');
                    content[disp][0].First_Name = edit
                
                }else if(option3 == 2){
                    var edit = readlineSync.question('Please Enter The Modified Value :');
                    content[disp][1].Middle_Name = edit
                
                }else if(option3 == 3){
                    var edit = readlineSync.question('Please Enter The Modified Value :');
                    content[disp][2].Last_Name = edit
                
                }else if(option3 == 4){
                    var edit = readlineSync.question('Please Enter The Modified Value :');
                    content[disp][3].Address = edit
                
                }else if(option3 == 5){
                    var edit = readlineSync.question('Please Enter The Modified Value :');
                    content[disp][4].City = edit
                
                }else if(option3 == 6){
                    var edit = readlineSync.question('Please Enter The Modified Value :');
                    content[disp][5].State = edit
                
                }else if(option3 == 7){
                    var edit = readlineSync.question('Please Enter The Modified Value :');
                    content[disp][6].ZIP = edit
                
                }else if(option3 == 8){
                    var edit = readlineSync.question('Please Enter The Modified Value :');
                    content[disp][7].Phone_Number = edit
                
                }else{
                    console.log("Sorry You Have Entered A Wrong Choice Please Try Again"); 
                }
            }else if(option2 == 3){
                delete content[disp]

            }else{
                console.log("Sorry You Have Entered A Wrong Choice Please Try Again");
            }
        }else{
            console.log("Sorry Result Not Found");   
        } 
    }
}


fs.writeFile("/home/administrator/Desktop/Shakti/Addressbook.json", JSON.stringify(content), (err) => {     
    // In case of a error throw err. 
    if (err) throw err; 
}) 