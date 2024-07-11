"use strict";
const container = document.querySelector(".container");
const btnRed = document.querySelector(".color-2");
const btnBlue = document.querySelector(".color-1");
const sizeContainer = document.querySelector(".sizes");
const sizes = document.querySelectorAll(".size-free");

btnRed.addEventListener("click", (e) => {
  container.classList.add("change");
});

btnBlue.addEventListener("click", (e) => {
  container.classList.remove("change");
});

sizeContainer.addEventListener("click", (e) => {
  const size = e.target.closest(".size-free");
  if (!size) return;
  sizes.forEach((size) => size.classList.remove("active"));
  size.classList.add("active");
});
