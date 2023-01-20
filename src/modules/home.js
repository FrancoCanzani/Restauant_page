import burger from "../assets/burger.png";

const createHome = () => {
  const homeContent = document.createElement("div");
  const leftContent = document.createElement("div");
  const rightContent = document.createElement("div");
  homeContent.classList.add("homeContent");
  leftContent.classList.add("leftContent");
  rightContent.classList.add("rightContent");
  content.appendChild(homeContent);
  homeContent.appendChild(leftContent);
  homeContent.appendChild(rightContent);

  //   Burger image
  const burgerImg = document.createElement("img");
  burgerImg.setAttribute("src", burger);
  burgerImg.classList.add("burgerImg");
  rightContent.appendChild(burgerImg);

  //   Left text
  const mainText = document.createElement("h2");
  mainText.classList.add("mainText");
  mainText.innerHTML = "Hack Burger;";
  leftContent.appendChild(mainText);

  const secondText = document.createElement("h1");
  secondText.classList.add("secondText");
  secondText.innerHTML = "Burgers for Programmers";
  leftContent.appendChild(secondText);
};

export default createHome;
