module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      hello_renderer = require("./hello-renderer");

  return function render(data, context) {
    __helpers.t(context, 
      hello_renderer,
      {
        "name": "World"
      });
  };
}