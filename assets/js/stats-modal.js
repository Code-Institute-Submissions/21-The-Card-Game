// Stats Modal
let statsModal = document.getElementById("stats-modal");
let statsBtn = document.getElementById("stats-button");
//let statsSpan = document.getElementsByClassName("close")[0];

// Open Rules modal 
statsBtn.onclick = function() {
  statsModal.style.display = "block";
};

// Rules modal close
function closeStats(){
  statsModal.style.display = "none";
};

/*
// Close when click outside modal//////
window.onclick = function(event) {
  if (event.target == statsModal) {
   statsModal.style.display = "none";
  }
};
*/