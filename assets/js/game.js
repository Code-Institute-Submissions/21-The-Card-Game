// Set global variables
let dealerHand = [];
let playerHand = [];

// Create a Card object
function Card(value, name, suit) {
	this.value = value;
	this.name = name;
    this.suit = suit;
};

// Create a deck of cards
function Deck() {
	this.names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    this.suits = ["♠", "♣", "♥", "♦"];
    
	let cards = [];
    
    for (let s = 0; s < this.suits.length; s++ ) {
        for (let n = 0; n < this.names.length; n++ ) {
            cards.push(new Card(n+1, this.names[n], this.suits[s]));
        }
    }

    return cards;
};

// Create a new deck of cards
let cardDeck = new Deck();

//console.log(cardDeck);    // Check card deck

// Create a shuffle function to randomise the cards 
// Fisher Yates Shuffle
function shuffle(array) {
    let currentIndex = array.length;
    let tempValue;
    let randIndex;

    while (0 != currentIndex) {
        randIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -=1;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = tempValue;
    }
    return array;
};

console.log(shuffle(cardDeck));     //Check shuffle

// Create dealer cards function
function dealerCards() {
    for(let i=0; i<2; i++) {
       let dealerDealtCards = cardDeck.shift();
        dealerHand.push(dealerDealtCards); 
    }
};

dealerCards();
console.log(dealerHand);        // Check dealerHand


// Create player cards function
function playerCards() {
    for(let i=0; i<2; i++) {
       let playerDealtCards = cardDeck.shift();
        playerHand.push(playerDealtCards); 
    }
};

playerCards();
console.log(playerHand);        // Check playerHand

// Assign & Add card values
function addCardValues(hand) {
    let cardArray = [];
    let cardTotal = 0;
    
    cardArray = hand;
    for (let i=0; i < hand.length; i += 1) {
        if (hand[i].name === "J" || hand[i].name === "Q" || hand[i].name === "K") {
            cardTotal += 10;
        } else if (hand[i].name === "A") {
            cardTotal += 11;
        } else {
            cardTotal += hand[i].name;
        }
    }
    return cardTotal;
};

addCardValues(dealerHand);
addCardValues(playerHand);

console.log(addCardValues(dealerHand));         //Check Card values for dealer Hand
console.log(addCardValues(playerHand));         //Check Card values for player Hand


// Check Score

// Start Game

// Hit

// Hold

// Dealer Hit

// Dealer Hold??

// Game outcome? Win, Lose, Draw

// Reset Game