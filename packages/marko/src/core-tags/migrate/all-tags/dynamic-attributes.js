module.exports = function migrate(el) {
  el.forEachAttribute((attr, index) => {
    if (!attr.name && !attr.spread) {
      const attribute = el.attributes.splice(index, 1)[0];
      attribute.spread = true;
      el.attributes.unshift(attribute);
    }
  });
};
