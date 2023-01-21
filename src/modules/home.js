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

  //   Burger image on right content
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

  //   Div on left content
  const discount = document.createElement("div");
  discount.classList.add("discount");
  leftContent.appendChild(discount);
  const discountText = document.createElement("h1");
  discountText.classList.add("discountText");
  discountText.innerHTML = "Get 25% off if you can center a Div";
  discount.appendChild(discountText);
};

export default createHome;
