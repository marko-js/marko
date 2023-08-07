module.exports = function migrate(el) {
  const attr = el.getAttribute("ref");
  if (!attr) {
    return;
  }

  el.setAttributeValue("key", attr.value);
  el.removeAttribute(attr.name);
};
