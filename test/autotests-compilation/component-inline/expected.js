function create(__markoHelpers) {
  var __widgetType = {
          name: "component-inline",
          def: function() {
            return module.exports;
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      marko_attr = __markoHelpers.a,
      marko_attrs = __markoHelpers.as,
      marko_loadTag = __markoHelpers.t,
      w_widget_tag = marko_loadTag(require("marko-widgets/taglib/widget-tag"));

  return function render(data, out) {
    w_widget_tag({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div" +
            marko_attr("id", widget.id) +
            marko_attrs(__widgetAttrs(widget)) +
            "></div>");
        }
      }, out);
  };
}

var component = (function() {
  return {};
})();

var template = require("marko/html").c(__filename, create);

module.exports = require("marko-widgets").c(component, template);
