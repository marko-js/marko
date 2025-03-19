module.exports = function (input) {
  if (!input.toJSON) {
    input.toJSON = emptyInput;
  }
};

function emptyInput() {
  return {};
}
