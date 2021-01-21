export const normalizeText = (text) => {
  return text.replace('[...]', '') || text.replace('[]', '.');
};
