import "./styles/main.scss";
import createHeader from "./modules/header.js";
import createHome from "./modules/home.js";
import { createMenu, content } from "./modules/menu.js";

createHeader();

const cleanContent = () => {
  content.innerHTML = "";
};

cleanContent();
