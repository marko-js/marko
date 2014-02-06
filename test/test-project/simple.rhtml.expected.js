module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne;

  return function render(data, context) {
    context.w('Hello John');
  };
}