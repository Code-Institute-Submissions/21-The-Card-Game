// Set variables
let statsModal = document.getElementById("stats-modal");
let statsBtn = document.getElementById("stats-button");

// Add event listener
statsBtn.addEventListener("click", displayStats);

// Open stats modal 
function displayStats() {
    statsModal.style.display = "block";
}

// Stats modal close
function closeStats() {
    statsModal.style.display = "none";
}
