// Ambil element dulu
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const switchBtn = document.getElementById("switchBtn");

// State awal
let current = "red";

// Set default awal
redLight.style.background = "red";
yellowLight.style.background = "#444";
greenLight.style.background = "#444";

function resetLight() {
    redLight.style.background = "#444";
    yellowLight.style.background = "#444";
    greenLight.style.background = "#444";
}

function switchLight() {
  // Nyalakan kuning dulu
  resetLight();
  yellowLight.style.background = "yellow";

  setTimeout(() => {
    if (current === "red") {
      current = "green";
      redLight.style.background = "#444";
      yellowLight.style.background = "#444";
      greenLight.style.background = "green";
    } else {
      current = "red";
      greenLight.style.background = "#444";
      yellowLight.style.background = "#444";
      redLight.style.background = "red";
    }
  }, 1000);
}

switchBtn.addEventListener("click", switchLight);
