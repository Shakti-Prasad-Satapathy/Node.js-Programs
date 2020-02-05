const fs = require('fs');
const readlineSync = require('readline-sync');

var user = JSON.parse(fs.readFileSync("/home/administrator/Desktop/Shakti/OOP/STOCK_REPORT/user.json"));
var tranjection = JSON.parse(fs.readFileSync("/home/administrator/Desktop/Shakti/OOP/STOCK_REPORT/tranjection.json"));
var company = JSON.parse(fs.readFileSync("/home/administrator/Desktop/Shakti/OOP/STOCK_REPORT/company.json"));
//console.log(content.name);

var flag = "sps";
while (flag == "sps") {
    // var x = "TATA"
    // console.log(company[x].Number_of_shares);
    
    console.log("NOTE: Press 1 if You Are A Registred User or 2 If You Are A New User and 'x' for exit");
    var option1 = readlineSync.question('Please Enter Your Choice:');
    if (option1 == '1') {
        olduser();
    } else if (option1 == '2') {
        newuser();
    } else if(option1 = 'x'){
        flag = "jhnsdfkjhnj"
    }else {
        console.log("Sorry You Have Entered A Wrong Choice Please Try Again");
    }

    function newuser(){
        var id = readlineSync.question('Please Enter An ID:');
        console.log("NOTE: Remember Your Id, By This Only You Can Access The System");
        var name = readlineSync.question('Please Enter Your Full Name:');
        user[id+''] = [];
        user[id].push({
            "Name": name,
            "Number_of_shares": 0,
            "Amount_you_have" : 0
        })
    }

    function olduser(){
        var id = readlineSync.question('Please Enter Your ID to continue: ');
        if(user[id]){
            console.log(company);
            var company_name = readlineSync.question('Please Enter The Company name to buy or sell Shares: ');
            if(company[company_name]){
                var option2 = readlineSync.question('Please Enter 1 for buy and 2 for sell the sheres: ');
                if(option2 == 1){
                    buyShares(id,company_name,);
                }else if(option2 == 2){
                    sellShares(id,company_name,);
                }else{
                    console.log("Sorry You have entered a wrong choice Please try again"); 
                }
            }
        }
    }

    function buyShares(id,company_name,){
        var id = id;
        var company_name = company_name;
        var num_of_shares = readlineSync.question('Please Enter Number of Shares You WantsTo buy: ');
       

        company[company_name].Number_of_shares = company[company_name].Number_of_shares - num_of_shares;
        
        user[id].Number_of_shares = user[id].Number_of_shares + num_of_shares
        user[id].Total_Share_Price = user[id].Total_Share_Price +(company[company_name].Price_per_shares * num_of_shares)

        tranjection.Tranjections.push({
            "From": company_name,
            "To": user[id].Name,
            "Type": "buy",
            "Number_of_shares": num_of_shares,
            "Price_per_shares": company[company_name].Price_per_shares,
            "Total_Share_Price": company[company_name].Price_per_shares * num_of_shares
        })
        // tranjection.From = company_name
        // tranjection.To = user[id].Name
        // tranjection.Type = "buy"
        // tranjection.Number_of_shares = num_of_shares
        // tranjection.Price_per_shares = company[company_name].Price_per_shares
        // tranjection.Total_Share_Price = company[company_name].Price_per_shares * num_of_shares
    }

    function sellShares(id,company_name,){
        var id = this.id;
        var company_name = this.company_name;
        var num_of_shares = readlineSync.question('Please Enter Number of Shares You WantsTo sell: ');

        company[company_name].Number_of_shares = company[company_name].Number_of_shares + num_of_shares;
        
        user[id].Number_of_shares = user[id].Number_of_shares - num_of_shares;
        user[id].Total_Share_Price = user[id].Total_Share_Price -(company[company_name].Price_per_shares * num_of_shares)

        tranjection.From = user[id].Name
        tranjection.To = company_name
        tranjection.Type = "sell"
        tranjection.Number_of_shares = num_of_shares
        tranjection.Price_per_shares = company[company_name].Price_per_shares
        tranjection.Total_Share_Price = company[company_name].Price_per_shares * num_of_shares
    }

    //console.log(user);

}
fs.writeFile("/home/administrator/Desktop/Shakti/OOP/STOCK_REPORT/user.json", JSON.stringify(user), (err) => {     
        // In case of a error throw err. 
        if (err) throw err; 
}) 
fs.writeFile("/home/administrator/Desktop/Shakti/OOP/STOCK_REPORT/tranjection.json", JSON.stringify(tranjection), (err) => {     
    // In case of a error throw err. 
    if (err) throw err; 
}) 
fs.writeFile("/home/administrator/Desktop/Shakti/OOP/STOCK_REPORT/company.json", JSON.stringify(company), (err) => {     
    // In case of a error throw err. 
    if (err) throw err; 
}) 