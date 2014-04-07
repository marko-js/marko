module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXmlAttr = helpers.xa,
      escapeXml = helpers.x,
      forEach = helpers.f;

  return function render(data, context) {
    var rootClass=data.rootClass;

    var colors=data.colors;

    var message=data.message;

    context.w('<div class="hello-world ' +
      escapeXmlAttr(rootClass) +
      '">' +
      escapeXml(message) +
      '</div>');

    if (notEmpty(colors)) {
      context.w('<ul>');

      forEach(colors, function(color) {
        context.w('<li class="color">' +
          escapeXml(color) +
          '</li>');
      });

      context.w('</ul>');
    }

    if (empty(colors)) {
      context.w('<div>No colors!</div>');
    }
  };
}