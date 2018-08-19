// DOM Elements
let txt = document.getElementById('text-area'),
    newBtn = document.getElementById('new-game-button'),
    hitBtn = document.getElementById('hit-button'),
    stayBtn = document.getElementById('stay-btn');

// Card definition
let suits = ["Hearts", "Diamonds", "Spades", "Clubs"],
    values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight",
                "Seven", "Six", "Five", "Four", "Three", "Two"];



// function to loop through an empty deck.
function createDeck() {
    let deck = []; // empty deck
    // loop through the suit and values of each suit
    for(let i =0; i < suits.length; i++){
        for(let j=0; j < values.length; j++){
            deck.push(values[j] + ' of ' + suits[i]);
        }
    }
    return deck;
}

// takes the first value of the deck and shift the rest down.
function getNextCard() {
    return deck.shift();
}

let deck = createDeck();




    // suits.forEach((suit) => {
    //     values.forEach((value) => {
    //         deck.push(suit, value);
    //     })
    // })

    // loop through the deck
    for(let i=0; i < deck.length; i++){
        console.log(deck[i]);
    }

    let playerCards = [getNextCard(), getNextCard()];

    console.log('Welcome to BlackJack');
    console.log('You have been dealt: ');
    console.log(' ' + playerCards[0]);
    console.log(' ' + playerCards[1]);

