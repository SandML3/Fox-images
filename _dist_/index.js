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

const addImageButton = document.querySelector("#add_button");
const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};
addImageButton.addEventListener("click", addImage);

const cleanButton = document.querySelector("#clean_button");
const cleanImages = () => {
  mountNode.innerHTML = "";
};

cleanButton.addEventListener("click", cleanImages);

mountNode.append(newImage);
registerImage(newImage);
