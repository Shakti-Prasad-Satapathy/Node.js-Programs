var flag = 0;
var nos = new Array();
for (n=2; n<=10000; n++){  
    flag = 0;
    for (i = 2; i <=  n/2; i++) {    
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        palindrome(n); 
    }
}

function palindrome(prim) {
    var temp = 0, r = 0, sum = 0;
    temp = prim;
    while (temp > 1) {
        r = temp%10;
        sum = (sum * 10) + r;
        temp = temp / 10;
        temp = Math.floor(temp);
    }

    if (prim == sum) {
        nos.push(sum);
    }	
}
var x, y;
for (i = 0; i < nos.length; i++) {
    for (j = i+1; j < nos.length; j++) {
        x = nos[i]
        y = nos[j]
        s1 = x.toString();
        s2 = y.toString();
        if(s1.length==s2.length) {
            var a=[]; 
            a.push(x%10);
            x=Math.floor(x/10);
            a.push(x%10);
            x=Math.floor(x/10);
            a.push(x%10);

            var b=[]; 
            b.push(y%10);
            y = Math.floor(y/10);
            b.push(y%10);
            y = Math.floor(y/10);
            b.push(y%10);

            a.sort();
            b.sort();

            // console.log(a)
            // console.log(b)
            
            //if(a.equals(b) == true) {
            if(JSON.stringify(a)==JSON.stringify(b))   {
            //if (a===b){
                console.log(x + " and " + y + " are anagrams");  
            }  
        }
    }
}
