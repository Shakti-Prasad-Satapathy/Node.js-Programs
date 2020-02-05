const readlineSync = require('readline-sync');

var month = readlineSync.question('Please enter the month (1 for jan, 2 for feb.....): ');
var year = readlineSync.question('Please enter the year: ');
var day = 1

calender_logic(day, month, year) 



function calender_logic(day, month, year){
    y = Math.ceil(year - (14 - month) / 12)
    x = Math.ceil(y + Math.ceil(y / 4) - Math.ceil(y / 100) + Math.ceil(y / 400))
    m = Math.ceil(month + 12 * Math.ceil((14 - month) / 12) - 2)
    d = Math.ceil(Math.ceil(day + x + (31 * m) / 12) % 7)
    dayx = d
    // y = year - (14 - month) / 12
    // x = y + y / 4 - y / 100 + y / 400
    // m = month + 12 * ((14 - month) / 12) - 2
    // d = (day + x + (31 * m) / 12) % 7
    // dayx = Math.ceil(d)

    months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"]

    days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month == 2 && (year % 4 == 0) && (year % 100 != 0) && (year % 400 == 0)){
        days[month] = 29
    }
    print_dates(day, month, year, days, dayx, months)
}



function print_dates(day, month, year, days, dayx, months){
    console.log( "    " + months[month] + "  " + year);
    console.log(" S  M  Tu  W  T  F  S")
    
    var temp = dayx
    console.log("==========+>  " + dayx);
    console.log(">>>>>>>>>>>>>"+days[month]);
    
    let s = "   "
    let ss = ""
    for (i = 1; i < temp; i++){
        // console.log( "   " )
        ss = ss + s;
    }
    console.log(ss+"=+=+=+");
    
    temp = 1
    let str = '';
    for (i = 1/*temp*/; i < days[month]; i++){
    
        if (i == temp && temp < 10){
            str += ' ' + i + ' ';
            //console.log( "  "+i)
            temp = temp + 1
        }else{
            //console.log( " "+i)
            str += i + ' ';
        }


        // if (((i + dayx) % 7 == 0) || (i == days[month])){
        //     //console.log( "**************" )
        //     console.log( "**************" + str)
        //     str = ""
        // }
        // console.log(str)
        if(i % 7 == 0){
            console.log(str)
            str = ""
        }
    }
}

// let n = 10;
// let str = '';
// for (let i = 1; i <= n; i++) {
//   str += i + ' ';
// }
// console.log(str.trim());var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



// //var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var days = [1,2,3,4,5,6,7]
// var d = new Date();
// var dayName = days[d.getDay()];
// // var d = new Date(dateString);
// // var dayName = d.toString().split(' ')[0];
// console.log(dayName);
