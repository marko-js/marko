exports.create = function(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      hello_renderer = __renderer(require("./hello-renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    __tag(out,
      hello_renderer,
      {
        "name": "World"
      });
  };
}