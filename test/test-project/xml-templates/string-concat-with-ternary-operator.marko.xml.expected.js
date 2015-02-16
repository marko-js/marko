exports.create = function(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w(('\nA: ') +
      (true ? 'ABC' : '') +
      ('\nB: This should be outputted as well.\n'));
  };
}