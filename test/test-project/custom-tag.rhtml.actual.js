function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      hello_renderer = require("./hello-renderer");

  return function render(data, context) {
    context.t(
      hello_renderer,
      {
        "name": "world"
      });
  };
}