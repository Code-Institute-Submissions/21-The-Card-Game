// Create a Card object
function card(value, name, suit) {
	this.value = value;
	this.name = name;
    this.suit = suit;
};

// Create a deck of cards
function deck() {
	this.names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    this.suits = ["♠", "♣", "♥", "♦"];
    
	var cards = [];
    
    for (var s = 0; s < this.suits.length; s++ ) {
        for (var n = 0; n < this.names.length; n++ ) {
            cards.push(new card(n+1, this.names[n], this.suits[s]));
        }
    }

    return cards;
};

// Create a new deck of cards
let myDeck = new deck();

console.log(myDeck);

// Shuffle Cards

// Deal cards to dealer

// Deal cards to player

// Assign & Add card values

// Check Score

// Start Game

// Hit

// Hold

// Dealer Hit

// Dealer Hold??

// Game outcome? Win, Lose, Draw

// Reset Game