// Set global variables
let dealerHand = [];
let playerHand = [];

// win lose draw variables 
let winGamesTwentyOne = 0;
let winGames = 0;
let lostGames = 0;
let drawGames = 0;

// Create a Card object
function Card(value, name, suit) {
	this.value = value;
	this.name = name;
    this.suit = suit;

        if (this.suit === "♥" || this.suit === "♦") {
            this.color = "red";
        } else if(this.suit === "♠" || this.suit === "♣") {
            this.color = "black";
        }
}

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
}

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
}

console.log(shuffle(cardDeck));     //Check shuffle

// Create dealer cards function
function dealerCards() {
    for(let i=0; i<2; i++) {
       let dealerDealtCards = cardDeck.shift();
        dealerHand.push(dealerDealtCards); 
    }
}

//dealerCards();
console.log(dealerHand);        // Check dealerHand


// Create player cards function
function playerCards() {
    for(let i=0; i<2; i++) {
       let playerDealtCards = cardDeck.shift();
        playerHand.push(playerDealtCards); 
    }
}

//playerCards();
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
}

//addCardValues(dealerHand);
//addCardValues(playerHand);

console.log(addCardValues(dealerHand));         //Check Card values for dealer Hand
console.log(addCardValues(playerHand));         //Check Card values for player Hand


// Create check Score
let dealerScore;
let playerScore;

let messageStatus = document.getElementById("message-status");

let dealerCardTotal = document.getElementById("dealer-card-total");
let playerCardTotal = document.getElementById("player-card-total");

function checkScore() {
    dealerScore = addCardValues(dealerHand);
    playerScore = addCardValues(playerHand);

    if (playerScore === 21) {
        messageStatus.innerHTML = "You win! Congratulations <br>  You got 21!"; 
        winTwentyOne();
        winGamesTwentyOne++;
    } else if (playerScore > 21) {
        messageStatus.innerHTML = "Bust! Better luck next time";
        bust();
        lostGames++;
    } else if (dealerScore === 21) {
        messageStatus.innerHTML = "Dealer got 21! Better luck next time";
        dealerTwentyOne();
        lostGames++;
    } else if (dealerScore > 21) {
        messageStatus.innerHTML = "You Win! Dealer went bust";
        dealerBust();
        winGames++;
    }

    dealerCardTotal.className += " score";
    dealerCardTotal.innerText = dealerScore;

    playerCardTotal.className += " score";
    playerCardTotal.innerText = playerScore;

    document.getElementById("wins-twenty-one").innerHTML = winGamesTwentyOne;
    document.getElementById("wins").innerHTML = winGames;
    document.getElementById("losses").innerHTML = lostGames;
    document.getElementById("draws").innerHTML = drawGames;
}
//checkScore();


//Create start game function
//Set event listener for start button
let startGameButton = document.getElementById("start-game-button");

startGameButton.addEventListener("click", startGame);

function startGame() {
    shuffle(cardDeck);
    dealerCards();
    playerCards();
    renderDealerCards();
    renderPlayerCards();
    addCardValues(dealerHand);
    addCardValues(playerHand);
    checkScore();

    startGameButton.disabled = true;
    hitButton.disabled = false;
    holdButton.disabled = false;
}

//Render cards to the html
function renderDealerCards() {  
    for(let i=0; i < dealerHand.length; i++) {
        renderCardDiv = document.createElement("div");
        renderCardDiv.classList.add("card", dealerHand[i].color);
        renderCardDiv.innerHTML = '<div class="card-id">' + '' + dealerHand[i].name + '' + dealerHand[i].suit + '' + '</div>'+ '<div class="suit-card">' + dealerHand[i].suit + '</div>' + '<div class="card-id2">' + '' + dealerHand[i].name + '' + dealerHand[i].suit;
        document.getElementById("dealer-hand").appendChild(renderCardDiv);
    }  
}

function renderPlayerCards() {
    for(let i=0; i < playerHand.length; i++) {
        renderCardDiv = document.createElement("div");
        renderCardDiv.classList.add("card", playerHand[i].color);
        renderCardDiv.innerHTML = '<div class="card-id">' + '' + playerHand[i].name + '' + playerHand[i].suit + '' + '</div>'+ '<div class="suit-card">' + playerHand[i].suit + '</div>' + '<div class="card-id2">' + '' + playerHand[i].name + '' + playerHand[i].suit + '';
        document.getElementById("player-hand").appendChild(renderCardDiv);
    }
}

// Create hit function
// Set event listener for hit button
let hitButton = document.getElementById("hit-button");
hitButton.addEventListener("click", hit);

function hit() {
    let hitCard = cardDeck.shift();
    playerHand.push(hitCard);
        console.log(hitCard);       //Check hitCard

    renderCardDiv = document.createElement("div");
    renderCardDiv.classList.add("card", hitCard.color);
    renderCardDiv.innerHTML = '<div class="card-id">' + '' + hitCard.name + '' + hitCard.suit + '' + '</div>'+ '<div class="suit-card">' + hitCard.suit + '</div>' + '<div class="card-id2">' + '' + hitCard.name + '' + hitCard.suit + '';
    document.getElementById("player-hand").appendChild(renderCardDiv);
    
    collapsePlayerHand();
    checkScore();
}

// Create hold function
// Set event listener for hold button
let holdButton = document.getElementById("hold-button");
holdButton.addEventListener("click", hold);

function hold() {
    if (dealerScore <= 16) {
        let dealerCard = cardDeck.shift();
        dealerHand.push(dealerCard);
        
        console.log(dealerCard);                //Check dealerCard 

        renderCardDiv = document.createElement("div");
        renderCardDiv.classList.add("card", dealerCard.color);
        renderCardDiv.innerHTML = '<div class="card-id">' + '' + dealerCard.name + '' + dealerCard.suit + '' + '</div>'+ '<div class="suit-card">' + dealerCard.suit + '</div>' + '<div class="card-id2">' + '' + dealerCard.name + '' + dealerCard.suit + '';
        document.getElementById("dealer-hand").appendChild(renderCardDiv);
        collapseDealerHand();
        setTimeout(hold, 1000);
    }

    checkScore();
    gameOutcome();

    hitButton.disabled = true;
    holdButton.disabled = true;
}


// Create gameOutcome function, win/lose/draw
function gameOutcome() {
    if (dealerScore < 21 && dealerScore > 16 && dealerScore > playerScore) {
        messageStatus.innerHTML = "Dealer wins! Better luck next time";
        dealerWin();   
        lostGames++;     
    } else if (dealerScore < 21 && dealerScore > 16 && dealerScore < playerScore) {
        messageStatus.innerHTML = "You win! Congratulations";
        win();
         winGames++;
    } else if (dealerScore < 21 && dealerScore > 16 && dealerScore === playerScore) {
        messageStatus.innerHTML = "It's a draw!"; 
        draw();
        drawGames++;
    }

    document.getElementById("wins-twenty-one").innerHTML = winGamesTwentyOne;
    document.getElementById("wins").innerHTML = winGames;
    document.getElementById("losses").innerHTML = lostGames;
    document.getElementById("draws").innerHTML = drawGames;

    console.log(winGamesTwentyOne);     //Check wingamesTwentyOne
    console.log(winGames);              //Check wingames
    console.log(lostGames);             //Check lostgames
    console.log(drawGames);             //Check drawgames
    
    
}

// Create reset function
// Set event listener for reset button
let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", gameReset);

function gameReset() {
    dealerHand = [];
    playerHand = [];
    dealerScore = 0;
    playerScore = 0;

    
    dealerCardTotal.innerText = " ";
    playerCardTotal.innerText = " ";
    messageStatus.innerText = " ";
    
    let removeDealerCards = document.getElementById("dealer-hand");
    while (removeDealerCards.firstChild) { 
        removeDealerCards.removeChild(removeDealerCards.firstChild); 
    } 

    let removePlayerCards = document.getElementById("player-hand");
    while (removePlayerCards.firstChild) { 
        removePlayerCards.removeChild(removePlayerCards.firstChild); 
    }
    
    document.getElementById("dealer-hand").classList.remove("collapse-hand");
    document.getElementById("player-hand").classList.remove("collapse-hand");

    startGameButton.disabled = false;
    hitButton.disabled = true;
    holdButton.disabled = true;
    
}

// Create collapse hand function
function collapseDealerHand() {
    if (dealerHand.length > 3) {
        document.getElementById("dealer-hand").classList.add("collapse-hand");
    }
}

function collapsePlayerHand() {
    if (playerHand.length > 3) {
        document.getElementById("player-hand").classList.add("collapse-hand");
    }
}


//Game Outcome Modals
//let playAgainButton = document.getElementsByClassName("play-again")[0];

// Create Win Modal
let winModal = document.getElementById("win-modal");

function win() {
    winModal.style.display = "block";
}

function closeWin(){
    winModal.style.display = "none";
    gameReset();
}

//Create Dealer Win Modal
let dealerWinModal = document.getElementById("dealer-win-modal");

function dealerWin() {
    dealerWinModal.style.display = "block";
}

function closeDealerWin() {
  dealerWinModal.style.display = "none";
  gameReset();
}

//Create Win 21 Modal
let winTwentyOneModal = document.getElementById("win-twenty-one-modal");
   
function winTwentyOne() {
    winTwentyOneModal.style.display = "block";
}

function closeWinTwentyOne() {
  winTwentyOneModal.style.display = "none";
  gameReset();
}

//Create Dealer 21 Modal
let dealerTwentyOneModal = document.getElementById("dealer-twenty-one-modal");

function dealerTwentyOne() {
    dealerTwentyOneModal.style.display = "block";
}

function closeDealerTwentyOne() {
  dealerTwentyOneModal.style.display = "none";
  gameReset();
}

//Create Bust Modal
let bustModal = document.getElementById("bust-modal");

function bust() {
    bustModal.style.display = "block";
}

function closeBust(){
    bustModal.style.display = "none";
    gameReset();
}

//Create Dealer Bust Modal
let dealerBustModal = document.getElementById("dealer-bust-modal");

function dealerBust() {
    dealerBustModal.style.display = "block";
}

function closeDealerBust() {
  dealerBustModal.style.display = "none";
  gameReset();
}

//Create Draw Modal
let drawModal = document.getElementById("draw-modal");

function draw() {
   drawModal.style.display = "block";
}

function closeDraw() {
  drawModal.style.display = "none";
  gameReset();
}

// Add event listener for closing all modals
window.addEventListener('click', closeModals);

// Create close modals function when click outside the modal
function closeModals() {
  if (event.target == winModal) {
   winModal.style.display = "none";
   gameReset();
  }
  if (event.target == dealerWinModal) {
   dealerWinModal.style.display = "none";
   gameReset();
  }
  if (event.target == winTwentyOneModal) {
   winTwentyOneModal.style.display = "none";
   gameReset();
  }
  if (event.target == dealerTwentyOneModal) {
   dealerTwentyOneModal.style.display = "none";
   gameReset();
  }
   if (event.target == bustModal) {
   bustModal.style.display = "none";
   gameReset();
  }
  if (event.target == dealerBustModal) {
   dealerBustModal.style.display = "none";
   gameReset();
  }
  if (event.target == drawModal) {
   drawModal.style.display = "none";
   gameReset();
  }
  if (event.target == settingsModal) {
   settingsModal.style.display = "none";
  }
  if (event.target == rulesModal) {
   rulesModal.style.display = "none";
  }
  if (event.target == statsModal) {
   statsModal.style.display = "none";
  }
}
