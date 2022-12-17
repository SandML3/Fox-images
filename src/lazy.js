const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.firstChild;
  const url = image.dataset.src;
  image.src = url;

  observer.unobserve(entry.target);
};

//
const observer = new IntersectionObserver((allEntries) => {
  allEntries.filter(isIntersecting).forEach(loadImage);
});

//
export const registerImage = (imagen) => {
  observer.observe(imagen);
};
