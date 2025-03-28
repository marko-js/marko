var toJSONDescriptor = {
  enumerable: false,
  value: function emptyInput() {
    return {};
  },
};
module.exports = function (input) {
  if (!input.toJSON) {
    Object.defineProperty(input, "toJSON", toJSONDescriptor);
  }
};
