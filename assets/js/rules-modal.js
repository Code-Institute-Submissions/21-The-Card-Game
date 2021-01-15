// Rules Modal
let rulesModal = document.getElementById("rules-modal");
let rulesBtn = document.getElementById("rules-button");
//let rulesSpan = document.getElementsByClassName("close")[0];

// Open Rules modal 
rulesBtn.onclick = function() {
  rulesModal.style.display = "block";
};

// Rules modal close
function closeRules(){
  rulesModal.style.display = "none";
};


/*
// Close when click outside modal//////
window.onclick = function(event) {
  if (event.target == rulesModal) {
   rulesModal.style.display = "none";
  }
};
*/