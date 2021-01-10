// Rules Modal
let rulesModal = document.getElementById("rules-modal");
let rulesBtn = document.getElementById("rules-button");
let rulesSpan = document.getElementsByClassName("close")[0];

rulesBtn.onclick = function() {
  rulesModal.style.display = "block";
};

rulesSpan.onclick = function() {
  rulesModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == rulesModal) {
   rulesModal.style.display = "none";
  }
};