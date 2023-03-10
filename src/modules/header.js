import logo from "../assets/logo.png";
import home from "../assets/silverware-fork-knife.svg";
import menu from "../assets/menu.svg";
import phone from "../assets/phone.svg";
import { content } from "./menu";

const createHeader = () => {
  const newHeader = document.createElement("header");
  document.querySelector("body").insertBefore(newHeader, content);

  //   Logo
  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", logo);
  logoImg.classList.add("logo");
  newHeader.appendChild(logoImg);

  //   Buttons
  const buttonCreator = (imgPath, btnText, idName) => {
    const Btn = document.createElement("button");
    const BtnImg = document.createElement("img");
    BtnImg.setAttribute("src", imgPath);
    BtnImg.classList.add("btnImg");
    Btn.appendChild(BtnImg);
    Btn.setAttribute("id", idName);
    const BtnText = document.createElement("span");
    BtnText.textContent = btnText;
    Btn.appendChild(BtnText);
    newHeader.appendChild(Btn);
  };

  buttonCreator(home, "Home", "btnHome");
  buttonCreator(menu, "Menu", "btnMenu");
  buttonCreator(phone, "Contact", "btnPhone");
};

export default createHeader;
