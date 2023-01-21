import superBurger from "../assets/8_burger.png";
import black_burger from "../assets/black_burger.png";
import chicken_burger from "../assets/chicken_burger.png";
import double_killer from "../assets/double_killer.png";
import pickles_burger from "../assets/pickles_burger.png";
import veggie_burger from "../assets/veggie_burger.png";
import super_cheese from "../assets/super_cheese.png";
import crispy_long from "../assets/crispy_long.png";

const content = document.getElementById("content");

const createMenu = () => {
  const topText = document.createElement("h1");
  topText.classList.add("topText");
  topText.innerHTML = "These are some of our famous burgers";
  content.appendChild(topText);

  const burgerContainer = document.createElement("div");
  burgerContainer.classList.add("burgerContainer");
  content.appendChild(burgerContainer);

  const burgerCreator = (img, text, burgerPrice) => {
    const burger = document.createElement("div");
    const burgerImg = document.createElement("img");
    burgerImg.setAttribute("src", img);
    burgerImg.classList.add("burgerImg");
    burger.appendChild(burgerImg);
    burger.classList.add("burger");
    const burgerText = document.createElement("p");
    burgerText.classList.add("burgerText");
    burgerText.textContent = text;
    burger.appendChild(burgerText);
    const price = document.createElement("h3");
    price.classList.add("price");
    price.textContent = `In store for ${burgerPrice}`;
    burger.appendChild(price);
    burgerContainer.appendChild(burger);
  };

  burgerCreator(superBurger, "Heart attack", "8$");
  burgerCreator(black_burger, "Black Sabath", "4.5$");
  burgerCreator(chicken_burger, "Fried chicken", "2.5$");
  burgerCreator(double_killer, "2 is better than 1", "5.5$");
  burgerCreator(pickles_burger, "Pickles? Really?", "4$");
  burgerCreator(veggie_burger, "Veggie haha", "3$");
  burgerCreator(crispy_long, "Crispy crispy crispy", "3.5$");
  burgerCreator(super_cheese, "See a cardiologist", "5$");
};

export { createMenu, content };
