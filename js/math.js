// عمل ريساسز لصفحه
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-srif";

// الهيدر

let header = document.createElement("div");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "20px";
header.style.backgroundColor = "#f8f8f8";
header.style.borderBottom = "2px soild #ddd";

// links

let title = document.createElement("h1");
title.textContent = "Hady";
title.style.color = "navy";
header.appendChild(title);
//navbar
let nav = document.createElement("nav");
let links = ["Home", "About", "Service", "contact"];
links.forEach((linktext) => {
  let link = document.createElement("a");
  link.textContent = linktext;
  link.href = "#";
  link.style.margin = "0 15px";
  link.style.textDecoration = "none";
  link.style.color = "gray";
  nav.appendChild(link);
});
header.appendChild(nav);
document.body.appendChild(header);

// انشاء الشكل المطلوب

let container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(3, 1fr)";
container.style.gap = "20px";
container.style.padding = "20px";
container.style.backgroundColor = "#eee";

for (let i = 1; i <= 15; i++) {
  let card = document.createElement("div");
  card.style.backgroundColor = "white";
  card.style.border = "1px soild #ddd";
  card.style.padding = "20px";
  card.style.textAlign = "center";
  card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  let number = document.createElement("h2");
  number.textContent = i;
  number.style.margin = "0";
  number.style.fontSize = "24px";
  number.style.color = "black";
  let product = document.createElement("p");
  product.textContent = "product";
  product.style.margin = "10px 0 0 0";
  product.style.color = "gray";
  card.appendChild(number);
  card.appendChild(product);
  container.appendChild(card);
}
document.body.appendChild(container);

// footer

let footer = document.createElement("div");
footer.textContent = "Copyright oct 2024";
footer.style.background = "navy";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "10px";
document.body.appendChild(footer);

/////
/*
let currentElement = document.querySelector(".current");
let resultDiv = document.querySelector(".result");
let addClassesInput = document.getElementById("addClasses");
let removeClassesInput = document.getElementById("removeClasses");

function updateClassesDisplay() {
  let classList = Array.from(currentElement.classList).sort();
  resultDiv.textContent =
    classList.length > 0 ? classList.join(", ") : "No Classes To Show";
}

addClassesInput.addEventListener("blur", function () {
  let classesToAdd = addClassesInput.value.trim();
  if (classesToAdd) {
    classesToAdd.split(" ").forEach((className) => {
      currentElement.classList.add(className.toLowerCase());
    });
    addClassesInput.value = ""; // Clear input field
    updateClassesDisplay();
  }
});

removeClassesInput.addEventListener("blur", function () {
  let classesToRemove = removeClassesInput.value.trim();
  if (classesToRemove) {
    classesToRemove.split(" ").forEach((className) => {
      currentElement.classList.remove(className.toLowerCase());
    });
    removeClassesInput.value = ""; // Clear input field
    updateClassesDisplay();
  }
});

*/
