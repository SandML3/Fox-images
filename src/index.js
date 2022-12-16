/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Lazy images :)");

const random = (max, min) => Math.floor(Math.random() * (max - min) + min);

const createImageNode = () => {
  const image = document.createElement("img");
  image.src = `https://randomfox.ca/images/${random(123, 1)}.jpg`;
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
const mountNode = document.querySelector("#images");

const button = document.querySelector("button");
const handlerClick = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
};

button.addEventListener("click", handlerClick);

mountNode.append(newImage);
