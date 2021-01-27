// Set global variables
let dealerHand = [];
let playerHand = [];

let dealerScore;
let playerScore;
    // win lose draw counter variables 
let winGamesTwentyOne = 0;
let winGames = 0;           
let lostGames = 0;          
let drawGames = 0;

// Create global DOM selector variables
let dealerCardTotal = document.getElementById("dealer-card-total");
let playerCardTotal = document.getElementById("player-card-total");
let startGameButton = document.getElementById("start-game-button");
let hitButton = document.getElementById("hit-button");
let holdButton = document.getElementById("hold-button");
let resetButton = document.getElementById("reset-button");
let resetModal = document.getElementById("reset-modal");
let yesButton = document.getElementById("yes-button");
let dealerHandCards = document.getElementById("dealer-hand");
let playerHandCards = document.getElementById("player-hand");

// Create Event Listeners
startGameButton.addEventListener("click", startGame);
hitButton.addEventListener("click", hit);
holdButton.addEventListener("click", hold);
yesButton.addEventListener("click", gameReset);
resetButton.addEventListener("click", displayAlert);

// Create a Card object
function Card(name, suit) {
    this.name = name;
    this.suit = suit;

    if (this.suit === "♥" || this.suit === "♦") {
        this.color = "red";
    } else if (this.suit === "♠" || this.suit === "♣") {
        this.color = "black";
    }
}

// Create a deck of cards
function Deck() {
    this.names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    this.suits = ["♠", "♣", "♥", "♦"];

    let cards = [];

    for (let s = 0; s < this.suits.length; s++) {
        for (let n = 0; n < this.names.length; n++) {
            cards.push(new Card(this.names[n], this.suits[s]));
        }
    }

    return cards;
}

// Create a new deck of cards
let cardDeck = new Deck();

// Create a shuffle function to randomise the cards 
// Fisher Yates Shuffle
function shuffle(array) {
    let currentIndex = array.length;
    let tempValue;
    let randIndex;

    while (0 != currentIndex) {
        randIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = tempValue;
    }
    return array;
}

// Create dealer cards function
function dealerCards() {
    for (let i = 0; i < 2; i++) {
        let dealerDealtCards = cardDeck.shift();
        dealerHand.push(dealerDealtCards);
    }
}

// Create player cards function
function playerCards() {
    for (let i = 0; i < 2; i++) {
        let playerDealtCards = cardDeck.shift();
        playerHand.push(playerDealtCards);
    }
}

// Assign & Add card values
function addCardValues(hand) {
    let cardTotal = 0;

    for (let i = 0; i < hand.length; i += 1) {
        if (hand[i].name === "J" || hand[i].name === "Q" || hand[i].name === "K") {
            cardTotal += 10;
        } else if (hand[i].name === "A") {
            if (cardTotal > 11) {
                cardTotal += 1;
            } else {
                cardTotal += 11;
            }
        } else {
            cardTotal += hand[i].name;
        }
    }
    return cardTotal;
}

// Create check Score
function checkScore() {
    dealerScore = addCardValues(dealerHand);
    playerScore = addCardValues(playerHand);

    if (playerScore === 21) {
        winTwentyOne();
        winGamesTwentyOne++;
    } else if (playerScore > 21) {
        bust();
        lostGames++;
    } else if (dealerScore === 21) {
        dealerTwentyOne();
        lostGames++;
    } else if (dealerScore > 21) {
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

//Create start game function
function startGame() {
    cardDeck = new Deck();
    shuffle(cardDeck);
    dealerCards();
    playerCards();
    dealCards(dealerHand);
    dealCards(playerHand);
    addCardValues(dealerHand);
    addCardValues(playerHand);
    checkScore();

    startGameButton.disabled = true;
    hitButton.disabled = false;
    holdButton.disabled = false;
}


//Deal cards and render to html
function dealCards(dealCardHand) {
    for (let i = 0; i < dealCardHand.length; i++) {
        if (dealCardHand == dealerHand) {
            let renderCardDiv = document.createElement("div");
            renderCardDiv.classList.add("card", dealerHand[i].color);
            renderCardDiv.innerHTML = `<div class="card-id">${dealerHand[i].name} ${dealerHand[i].suit}</div><div class="suit-card">${dealerHand[i].suit}</div><div class="card-id2">${dealerHand[i].name} ${dealerHand[i].suit}`;
            dealerHandCards.appendChild(renderCardDiv);

        } else if (dealCardHand == playerHand) {
            let renderCardDiv = document.createElement("div");
            renderCardDiv.classList.add("card", playerHand[i].color);
            renderCardDiv.innerHTML = `<div class="card-id">${playerHand[i].name} ${playerHand[i].suit}</div><div class="suit-card">${playerHand[i].suit} </div><div class="card-id2">${playerHand[i].name} ${playerHand[i].suit}`;
            playerHandCards.appendChild(renderCardDiv);
        }
    }
}

// Create hit function
function hit() {
    let hitCard = cardDeck.shift();
    playerHand.push(hitCard);

    let renderCardDiv = document.createElement("div");
    renderCardDiv.classList.add("card", hitCard.color);
    renderCardDiv.innerHTML = `<div class="card-id">${hitCard.name} ${hitCard.suit}</div><div class="suit-card">${hitCard.suit}</div><div class="card-id2">${hitCard.name} ${hitCard.suit}`;
    playerHandCards.appendChild(renderCardDiv);

    collapseHand(playerHand);
    checkScore();
}

// Create hold function
function hold() {
    if (dealerScore <= 16) {
        let dealerCard = cardDeck.shift();
        dealerHand.push(dealerCard);

        let renderCardDiv = document.createElement("div");
        renderCardDiv.classList.add("card", dealerCard.color);
        renderCardDiv.innerHTML = `<div class="card-id">${dealerCard.name} ${dealerCard.suit}</div><div class="suit-card">${dealerCard.suit}</div><div class="card-id2">${dealerCard.name} ${dealerCard.suit}`;
        dealerHandCards.appendChild(renderCardDiv);

        collapseHand(dealerHand);
        checkScore();

        if (dealerScore <= 16) {
            setTimeout(hold, 1000);
        } else {
            gameOutcome();
        }

    } else {
        gameOutcome();
    }

    hitButton.disabled = true;
    holdButton.disabled = true;
}

// Create gameOutcome function, win/lose/draw
function gameOutcome() {
    if (dealerScore < 21 && dealerScore > 16 && dealerScore > playerScore) {
        dealerWin();
        lostGames++;
    } else if (dealerScore < 21 && dealerScore > 16 && dealerScore < playerScore) {
        win();
        winGames++;
    } else if (dealerScore < 21 && dealerScore > 16 && dealerScore === playerScore) {
        draw();
        drawGames++;
    }

    document.getElementById("wins-twenty-one").innerHTML = winGamesTwentyOne;
    document.getElementById("wins").innerHTML = winGames;
    document.getElementById("losses").innerHTML = lostGames;
    document.getElementById("draws").innerHTML = drawGames;
}

// Create reset alert
// Open  reset alert 
function displayAlert() {
    resetModal.style.display = "block";
}

// Close reset alert
function closeAlert() {
    resetModal.style.display = "none";
}

// Create reset function
function gameReset() {
    dealerHand = [];
    playerHand = [];
    dealerScore = 0;
    playerScore = 0;

    dealerCardTotal.innerText = " ";
    playerCardTotal.innerText = " ";

    while (dealerHandCards.firstChild) {
        dealerHandCards.removeChild(dealerHandCards.firstChild);
    }

    while (playerHandCards.firstChild) {
        playerHandCards.removeChild(playerHandCards.firstChild);
    }

    dealerHandCards.classList.remove("collapse-hand");
    playerHandCards.classList.remove("collapse-hand");

    startGameButton.disabled = false;
    hitButton.disabled = true;
    holdButton.disabled = true;
}

function collapseHand(cardHand) {
    if (cardHand.length > 3) {
        if (cardHand == dealerHand) {
            dealerHandCards.classList.add("collapse-hand");
        } else if (cardHand == playerHand) {
            playerHandCards.classList.add("collapse-hand");
        }
    }
}


// Game Outcome Modals
// Create global DOM selector variables for game outcome modals
let winModal = document.getElementById("win-modal");
let dealerWinModal = document.getElementById("dealer-win-modal");
let winTwentyOneModal = document.getElementById("win-twenty-one-modal");
let dealerTwentyOneModal = document.getElementById("dealer-twenty-one-modal");
let bustModal = document.getElementById("bust-modal");
let dealerBustModal = document.getElementById("dealer-bust-modal");
let drawModal = document.getElementById("draw-modal");

// Add event listener for closing all modals
window.addEventListener('click', closeModals);

// Create Win Modal
function win() {
    winModal.style.display = "block";
}

function closeWin() {
    winModal.style.display = "none";
    gameReset();
}

//Create Dealer Win Modal
function dealerWin() {
    dealerWinModal.style.display = "block";
}

function closeDealerWin() {
    dealerWinModal.style.display = "none";
    gameReset();
}

//Create Win 21 Modal
function winTwentyOne() {
    winTwentyOneModal.style.display = "block";
}

function closeWinTwentyOne() {
    winTwentyOneModal.style.display = "none";
    gameReset();
}

//Create Dealer 21 Modal
function dealerTwentyOne() {
    dealerTwentyOneModal.style.display = "block";
}

function closeDealerTwentyOne() {
    dealerTwentyOneModal.style.display = "none";
    gameReset();
}

//Create Bust Modal
function bust() {
    bustModal.style.display = "block";
}

function closeBust() {
    bustModal.style.display = "none";
    gameReset();
}

//Create Dealer Bust Modal
function dealerBust() {
    dealerBustModal.style.display = "block";
}

function closeDealerBust() {
    dealerBustModal.style.display = "none";
    gameReset();
}

//Create Draw Modal
function draw() {
    drawModal.style.display = "block";
}

function closeDraw() {
    drawModal.style.display = "none";
    gameReset();
}

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

// Add onload function to disable hit and hold buttons
window.onload = function () {
    hitButton.disabled = true;
    holdButton.disabled = true;
}