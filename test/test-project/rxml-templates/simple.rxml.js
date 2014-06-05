module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      hello_renderer = require("../hello-renderer"),
      _tag = __helpers.t,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, context) {
    var rootClass = data.rootClass,
        colors = data.colors,
        message = data.message;

    _tag(context,
      hello_renderer,
      {
        "name": "World"
      });

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