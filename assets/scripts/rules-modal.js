// Set variables
let rulesModal = document.getElementById("rules-modal");
let rulesBtn = document.getElementById("rules-button");

// Add event listener
rulesBtn.addEventListener("click", displayRules);

// Open Rules modal 
function displayRules() {
    rulesModal.style.display = "block";
}

// Rules modal close
function closeRules() {
    rulesModal.style.display = "none";
}
