"use strict";

const container = document.querySelector(".container");
const btnSignUp = document.querySelector(".green-bg button");

btnSignUp.addEventListener("click", () => container.classList.toggle("change"));
