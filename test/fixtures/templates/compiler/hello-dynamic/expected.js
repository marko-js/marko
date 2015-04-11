exports.create = function(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('Hello ' +
      escapeXml(data.name) +
      '! Hello ' +
      str(data.name) +
      '! Hello ' +
      str(data.missing) +
      '!');
  };
}