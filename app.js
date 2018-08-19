// DOM Elements
let txt = document.getElementById('text-area'),
    newBtn = document.getElementById('new-game-button'),
    hitBtn = document.getElementById('hit-button'),
    stayBtn = document.getElementById('stay-button');

    // start off hiding buttons.
    hitBtn.style.display = 'none';
    stayBtn.style.display = 'none';
    

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
            // card obj
            let card = {
                suit: suits[i],
                value: values[j],
            };
            deck.push(card);
        }
    }
    return deck;
}

// function to print card
function printCard(card) {
    return card.value + ' of ' + card.suit;
}

// takes the first value of the deck and shift the rest down.
function getNextCard() {
    return deck.shift();
}

let deck = createDeck();

hitBtn.addEventListener('click', function(){
    // code here
});

newBtn.addEventListener('click', function(){
    // code here
});

stayBtn.addEventListener('click', function(){
    // code here
});


    // grabs two cards for the player.
    let playerCards = [getNextCard(), getNextCard()];

    console.log('Welcome to BlackJack');
    console.log('You have been dealt: ');
    console.log(' ' + printCard(playerCards[0]));
    console.log(' ' + printCard(playerCards[1]));

