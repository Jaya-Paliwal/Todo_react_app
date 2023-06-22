export const getClasse = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
