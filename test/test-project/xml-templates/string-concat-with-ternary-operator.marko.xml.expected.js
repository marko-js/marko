exports.create = function(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, context) {
    context.w(('\nA: ') +
      (true ? 'ABC' : '') +
      ('\nB: This should be outputted as well.\n'));
  };
}