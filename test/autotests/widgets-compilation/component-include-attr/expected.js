var template = require("marko/html").c(__filename);

module.exports = template;

var marko_widgets = require("marko/widgets/index"),
    marko_registerWidget = marko_widgets.registerWidget,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/component-include-attr/index", function() {
      return require("./");
    }),
    marko_widgetAttrs = marko_widgets.attrs,
    marko_widget_include = require("marko/widgets/taglib/helpers/include"),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_attrs = marko_helpers.as,
    marko_loadTag = marko_helpers.t,
    w_widget_tag = marko_loadTag(require("marko/widgets/taglib/widget-tag"));

function render(data, out) {
  w_widget_tag({
      type: marko_widgetType,
      body: 0,
      _cfg: data.widgetConfig,
      _state: data.widgetState,
      _props: data.widgetProps,
      _body: data.widgetBody,
      renderBody: function renderBody(out, widget) {
        out.w("<div" +
          marko_attr("id", widget.id) +
          marko_attrs(marko_widgetAttrs(widget)) +
          "><h1>Header</h1><div" +
          marko_attr("id", widget.elId(0)) +
          ">");

        marko_widget_include(data.widgetBody, out, null, widget.elId(0), widget);

        out.w("</div></div>");
      }
    }, out);
}

template._ = render;
