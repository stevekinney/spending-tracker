export default (property) => (elements) => (
  elements.reduce((sum, el) => sum + el[property], 0)
);
