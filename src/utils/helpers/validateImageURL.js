export const validateImageURL = (url) => {
  return url === ''
    ? 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'
    : url;
};
