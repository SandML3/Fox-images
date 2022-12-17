import { registerImage } from "./lazy.js";

const random = (max, min) => Math.floor(Math.random() * (max - min) + min);

const createImageNode = () => {
  const image = document.createElement("img");
  image.dataset.src = `https://randomfox.ca/images/${random(123, 1)}.jpg`;
  image.className = "mx-auto";
  image.title = "Fox image";
  image.alt = "Fox image";
  image.width = "320";

  const container = document.createElement("div");
  container.className = "p-4";
  container.append(image);

  return container;
};

const newImage = createImageNode();
newImage.firstChild.src = `https://randomfox.ca/images/${random(123, 1)}.jpg`;

const mountNode = document.querySelector("#images");

const button = document.querySelector("button");
const handlerClick = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};

button.addEventListener("click", handlerClick);

mountNode.append(newImage);
registerImage(newImage);
