const newTags = {
  "w-preserve": "no-update",
  "w-preserve-if": "no-update-if",
  "w-preserve-body": "no-update-body",
  "w-preserve-body-if": "no-update-body-if",
};
module.exports = function migrate(el) {
  el.forEachAttribute((attr) => {
    const name = attr.name;
    if (!name || !Object.keys(newTags).includes(name)) {
      return;
    }

    const newAttrName = newTags[name];
    attr.name = newAttrName;
  });
};
