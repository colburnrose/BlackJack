
// Card definition
let suits = ["Hearts", "Diamonds", "Spades", "Clubs"],
    values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight",
                "Seven", "Six", "Five", "Four", "Three", "Two"];

// DOM Elements
let txt = document.getElementById('text-area'),
    newBtn = document.getElementById('new-game-button'),
    hitBtn = document.getElementById('hit-button'),
    stayBtn = document.getElementById('stay-button');

    // Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

    // start off hidin
    hitBtn.style.display = 'none';
    stayBtn.style.display = 'none';
    showStatus();




// sets up the new game.    
newBtn.addEventListener('click', function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    // code here
    newBtn.style.display = 'none';
    hitBtn.style.display = 'inline';
    stayBtn.style.display = 'inline';
    showStatus();
});

hitBtn.addEventListener('click', function(){
    playerCards.push(getNextCard());
    checkForEndOfGame();
    showStatus();
});

stayBtn.addEventListener('click', function(){
    gameOver = true;
    checkForEndOfGame();
    showStatus();
});




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

// shuffle through the deck of cards
function shuffleDeck(deck) {
    for(let i =0; i < deck.length; i++) {
        // get random card
        let shuffle = Math.trunc(Math.random() * deck.length);
        let temp = deck[shuffle];
        deck[shuffle] = deck[i];
        deck[i] = temp;
    }
}

// function to print card
function printCard(card) {
    return card.value + ' of ' + card.suit;
}

// takes the first value of the deck and shift the rest down.
function getNextCard() {
    return deck.shift();
}

function getCardNumericValue(card) {
    switch(card.value){
        case 'Ace':
        return 1;
        case 'Two':
        return 2;
        case 'Three':
        return 3;
        case 'Four':
        return 4;
        case 'Five':
        return 5;
        case 'Six':
        return 6;
        case 'Seven':
        return 7;
        case 'Eight':
        return 8;
        case 'Nine':
        return 9;
        default:
        return 10;
    }
}

function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for(let i =0; i < cardArray.length; i++){
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if(card.value === 'Ace') {
            hasAce = true;
        }
    }
    if(hasAce && score + 10 <= 21){
        return score + 10;
    }
    return score;
}

function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
  
    updateScores();
    
    if (gameOver) {
      // let dealer take cards
      while(dealerScore < playerScore 
            && playerScore <= 21 
            && dealerScore <= 21) {
        dealerCards.push(getNextCard());
        updateScores();
      }
    }
    
    if (playerScore > 21) {
      playerWon = false;
      gameOver = true;
    }
    else if (dealerScore > 21) {
      playerWon = true;
      gameOver = true;
    }
    else if (gameOver) {
      
      if (playerScore > dealerScore) {
        playerWon = true;
      }
      else {
        playerWon = false;
      }
    }
  }

function showStatus() { 
    
    if(!gameStarted) {
        txt.innerText = 'Welcome to BlackJack';
        return;
    }

let dealerCardsString = '';
for (let i=0; i < dealerCards.length; i++){
    dealerCardsString += printCard(dealerCards[i]) + '\n';
}

let playerCardString = '';
for (let i=0; i < playerCards.length; i++){
    playerCardString += printCard(playerCards[i]) + '\n';
}


    updateScores();

txt.innerText = 
'Dealer has:\n'+
dealerCardsString +
'(score: '+ dealerScore + ')\n\n' +

'Player has:\n'+
playerCardString + 
'(score: '+ playerScore + ')\n\n';

if(gameOver){
    if(playerWon) {
        txt.innerText += 'You win!';
    }else {
        txt.innerText += 'Dealer wins!';
    }
    newBtn.style.display = 'inline';
    hitBtn.style.display = 'none';
    stayBtn.style.display = 'none';
}
} 










