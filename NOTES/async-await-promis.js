function fn(result){
    var x = 10;
    console.log(x + result);
    
    
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2 + 2);
        }, 2000);
    });
}

function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(20 + 20);
        }, 3000);
    });
}


async function asyncCall() {
    
    console.log('calling');
    const result1 = await resolveAfter2Seconds();
    const result2 = await resolveAfter3Seconds();
    console.log(result1);
    console.log(result2);
    console.log(result2 + result1);
    fn(result2);
    
    // expected output: 'resolved'
}

result = asyncCall();


