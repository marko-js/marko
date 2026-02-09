var toJSONDescriptor = {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function emptyInput() {
    return {};
  },
};
module.exports = function (input) {
  if (input.toJSON) {
    return input;
  } else {
    const newInput = { ...input };
    Object.defineProperty(newInput, "toJSON", toJSONDescriptor);
    return newInput;
  }
};
