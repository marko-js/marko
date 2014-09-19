module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      hello_renderer = require("./hello-renderer"),
      _tag = __helpers.t;

  return function render(data, out) {
    _tag(out,
      hello_renderer,
      {
        "name": "World"
      });
  };
}