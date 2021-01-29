// Set variables
let settingsModal = document.getElementById("settings-modal");
let settingsBtn = document.getElementById("settings-button");
let classicTheme = document.getElementById("classic");
let beachTheme = document.getElementById("beach");
let nightTheme = document.getElementById("night");
let background = document.getElementById("background");
let logo = document.getElementById("logo");
let dealerHeading = document.getElementById("dealer-heading");
let playerHeading = document.getElementById("player-heading");
let gameBoardArea = document.getElementById("game-board-area");

// Set event listeners
settingsBtn.addEventListener("click", displaySettings);
classicTheme.addEventListener("click", classic);
beachTheme.addEventListener("click", beach);
nightTheme.addEventListener("click", night);

// Settings modal open
function displaySettings() {
    settingsModal.style.display = "block";
}

// Settings modal close
function closeSettings() {
    settingsModal.style.display = "none";
}

// Create function for classic theme
function classic() {
    background.className = "bg-color-classic";
    logo.className = "classic-theme";
    dealerHeading.className = "classic-theme";
    playerHeading.className = "classic-theme";

    dealerCardTotal.className += " classic-theme";
    dealerCardTotal.classList.remove("night-theme");
    playerCardTotal.className += " classic-theme";
    playerCardTotal.classList.remove("night-theme");
    gameBoardArea.className += " classic-border";
    gameBoardArea.classList.remove("night-border");
}

// Create function for beach theme
function beach() {
    background.className = "bg-color-beach";
    logo.className = "classic-theme";
    dealerHeading.className = "classic-theme";
    playerHeading.className = "classic-theme";

    dealerCardTotal.className += " classic-theme";
    dealerCardTotal.classList.remove("night-theme");
    playerCardTotal.className += " classic-theme";
    playerCardTotal.classList.remove("night-theme");
    gameBoardArea.className += " classic-border";
    gameBoardArea.classList.remove("night-border");
}

// Create function for night theme
function night() {
    background.className = "bg-color-night";
    logo.className = "night-theme";
    dealerHeading.className = "night-theme";
    playerHeading.className = "night-theme";

    dealerCardTotal.className += " night-theme";
    dealerCardTotal.classList.remove("classic-theme");
    playerCardTotal.className += " night-theme";
    playerCardTotal.classList.remove("classic-theme");
    gameBoardArea.className += " night-border";
    gameBoardArea.classList.remove("classic-border");
}

