// Settings Modal
let settingsModal = document.getElementById("settings-modal");
let settingsBtn = document.getElementById("settings-button");
let settingsSpan = document.getElementsByClassName("settings-close")[0];

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