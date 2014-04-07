module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      hello_renderer = require("../hello-renderer"),
      escapeXmlAttr = helpers.xa,
      escapeXml = helpers.x,
      forEach = helpers.f;

  return function render(data, context) {
    var rootClass = data.rootClass,
        colors = data.colors,
        message = data.message;

    helpers.t(context, 
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