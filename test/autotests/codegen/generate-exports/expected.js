function create(__markoHelpers) {
  return function render(data, out) {};
}

var component = require("./component");

var template = require("marko").c(__filename, create);

module.exports = require("marko-widgets").c(component, template);
