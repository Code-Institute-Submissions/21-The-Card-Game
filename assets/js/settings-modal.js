// Settings Modal
let settingsModal = document.getElementById("settings-modal");
let settingsBtn = document.getElementById("settings-button");
let settingsSpan = document.getElementsByClassName("close")[0];

settingsBtn.onclick = function() {
  settingsModal.style.display = "block";
};

rulesSpan.onclick = function() {
  settingsModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == settingsModal) {
   settingsModal.style.display = "none";
  }
};

let classicTheme = document.getElementById("classic");
classicTheme.addEventListener("click", classic);
function classic() {
    document.getElementById("background").className = "bg-color-classic";
};

let beachTheme = document.getElementById("beach");
beachTheme.addEventListener("click", beach);
function beach() {
    document.getElementById("background").className = "bg-color-beach";
};

let nightTheme = document.getElementById("night");
nightTheme.addEventListener("click", night);
function night() {
    document.getElementById("background").className = "bg-color-night";
};