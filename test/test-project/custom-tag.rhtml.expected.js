module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      hello_renderer = require("./hello-renderer");

  return function render(data, context) {
    helpers.t(context, 
      hello_renderer,
      {
        "name": "World"
      });
  };
}