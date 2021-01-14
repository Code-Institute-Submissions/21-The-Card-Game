// Stats Modal
let statsModal = document.getElementById("stats-modal");
let statsBtn = document.getElementById("stats-button");
let statsSpan = document.getElementsByClassName("close")[0];

statsBtn.onclick = function() {
  statsModal.style.display = "block";
};

statsSpan.onclick = function() {
  statsModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == statsModal) {
   statsModal.style.display = "none";
  }
};