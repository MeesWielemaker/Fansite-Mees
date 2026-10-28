const fotos = document.querySelectorAll("#foto-groep img");
fotos.forEach(function (foto) {
  foto.addEventListener("mouseenter", function () {
    foto.style.transform = "scale(0.8)";
    // window.alert(foto.alt);
  });
  foto.addEventListener("mouseleave", function () {
    foto.style.transform = "scale(1)";
  });
});

const knop = document.getElementById("knop");
knop.addEventListener("click", function () {
  knop.textContent = "Lekker!";
});

const titel = document.getElementById("titel");
titel.addEventListener("click", function () {
  titel.style.color = "yellow";
});
const popup = document.getElementById("popup");
const ja = document.getElementById("ja-button");
const nee = document.getElementById("nee-button");
window.onload = function () {
  popup.style.display = "flex";
};

ja.addEventListener("click", function () {
  popup.style.display = "none";
});

nee.addEventListener("click", function () {
  window.location.href = "https://www.google.com";
});
