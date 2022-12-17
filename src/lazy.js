const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const isVisible = (entry) => {
  return entry.src;
};

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.firstChild;
  const url = image.dataset.src;
  image.src = url;

  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver((allEntries) => {
  allEntries.filter(isIntersecting).forEach(loadImage);

  console.log(
    "Número total de imágenes: ",
    document.querySelectorAll("img").length,
    "Número de imágenes cargadas: ",
    [...document.querySelectorAll("img")].filter(isVisible).length
  );
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
