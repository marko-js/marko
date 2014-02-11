module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      raptor_widgets_taglib_widget_tag = require("raptor-widgets/taglib/widget-tag");

  return function render(data, context) {
    context.t(
      raptor_widgets_taglib_widget_tag,
      {
        "path": require.resolve("./widget"),
        "_cfg": data.widgetConfig
      },
      function(widget) {
        context.w('<div class="foo"')
          .a("id", widget.elId())
          .w('>Foo</div>');
      });
  };
}