module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, context) {
    context.w('Hello John');
  };
}