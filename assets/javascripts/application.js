document.getElementById("info").innerHTML = "<p>Please click this button to submit info:</p> ";



document.getElementById('simple-button').addEventListener("click", function () {
  document.getElementById('simple-button').classList.add("button-style");
  document.getElementById('simple-button').innerHTML = "<p>I will be in contact very soon</p>";
})
