 
var deck = new Array();
var suits = ['♣︎', '♦', '♥︎', '♠︎'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
function deckOfCard(suits, values){

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + suits[i]);
            // deck.push(values[j] +  " " + suits[i]);
        }
    }
    return (deck);
}
var deck = deckOfCard(suits, values);

deck.sort(() => Math.random());
//console.log(deck);

arr = []
var k = 0;
for (let i = 0; i < 4; i++) {
    //arr1 = []
    for (let j = 0; j < 9; j++) {
        // arr[i][j]=deck[k];
        arr.push(deck[k])
        k=k+1;
    }
    //arr.push(arr1);
    console.log(arr);
    arr = []
}

// console.log(arr);