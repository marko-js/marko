var toJSONDescriptor = {
  configurable: true,
  enumerable: false,
  writable: true,
  value: function emptyInput() {
    return {};
  },
};
module.exports = function (input) {
  if (!input.toJSON) {
    Object.defineProperty(input, "toJSON", toJSONDescriptor);
  }
};
