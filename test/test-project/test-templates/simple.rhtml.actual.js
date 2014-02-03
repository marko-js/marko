function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXmlAttr = helpers.xa,
      escapeXml = helpers.x,
      forEach = helpers.f;

  return function render(data, context) {
    var rootClass = data.rootClass,
        colors = data.colors,
        message = data.message;

    context.w('<div class="hello-world ')
      .w(escapeXmlAttr(rootClass))
      .w('">')
      .w(escapeXml(message))
      .w('</div>');

    if (notEmpty(colors)) {
      context.w('<ul>');

      forEach(colors, function(color) {
        context.w('<li class="color">')
          .w(escapeXml(color))
          .w('</li>');
      });

      context.w('</ul>');
    }

    if (empty(colors)) {
      context.w('<div>No colors!</div>');
    }
  };
}