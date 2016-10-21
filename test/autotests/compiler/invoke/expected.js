function create(__markoHelpers) {
  return function render(data, out) {
    data.renderBody(out);
  };
}

module.exports = require("marko/html").c(__filename, create);
