const images = import.meta.glob('./*.{jpg,jpeg,png,gif}', { eager: true });

const getImage = (filename) => {
  for (const path in images) {
    if (path.includes(filename)) {
      return images[path].default;
    }
  }
  return '';
};

export default getImage;
