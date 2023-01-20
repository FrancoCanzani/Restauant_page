import logo from "../assets/logo.png";
import home from "../assets/silverware-fork-knife.svg";
import menu from "../assets/menu.svg";
import phone from "../assets/phone.svg";

const content = document.getElementById("content");

const createHeader = () => {
  const newHeader = document.createElement("header");
  content.appendChild(newHeader);

  //   Logo
  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", logo);
  logoImg.classList.add("logo");
  newHeader.appendChild(logoImg);

  //   Buttons
  const buttonCreator = (imgPath, btnText) => {
    const Btn = document.createElement("button");
    const BtnImg = document.createElement("img");
    BtnImg.setAttribute("src", imgPath);
    BtnImg.classList.add("btnImg");
    Btn.appendChild(BtnImg);
    Btn.classList.add("Btn");
    const BtnText = document.createElement("span");
    BtnText.textContent = btnText;
    Btn.appendChild(BtnText);
    newHeader.appendChild(Btn);
  };

  buttonCreator(home, "Home");
  buttonCreator(menu, "Menu");
  buttonCreator(phone, "Contact");
};

export default createHeader;
