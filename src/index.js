import "./styles/main.scss";
import createHeader from "./modules/header.js";
import createHome from "./modules/home.js";
import { createMenu, content } from "./modules/menu.js";
import createContact from "./modules/contact.js";

createHeader();
createHome();

const btnHome = document.getElementById("btnHome");
const btnPhone = document.getElementById("btnPhone");
const btnMenu = document.getElementById("btnMenu");

const cleanContent = () => {
  content.innerHTML = "";
};

btnHome.addEventListener("click", function () {
  btnHome.style.backgroundColor = "#ffcf4a";
  btnPhone.style.backgroundColor = "whitesmoke";
  btnMenu.style.backgroundColor = "whitesmoke";
  cleanContent();
  createHome();
});

btnMenu.addEventListener("click", function () {
  btnHome.style.backgroundColor = "whitesmoke";
  btnPhone.style.backgroundColor = "whitesmoke";
  btnMenu.style.backgroundColor = "#ffcf4a";
  cleanContent();
  createMenu();
});

btnPhone.addEventListener("click", function () {
  btnHome.style.backgroundColor = "whitesmoke";
  btnPhone.style.backgroundColor = "#ffcf4a";
  btnMenu.style.backgroundColor = "whitesmoke";
  cleanContent();
  createContact();
});
