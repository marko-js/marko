var template = require("marko/html").c(__filename);

var component = require("./component");

var template = template;

module.exports = require("marko/widgets").c(component, template);

var __widgetType = {
        name: "./component",
        def: function() {
          return module.exports;
        }
      },
    __markoWidgets = require("marko/widgets/index"),
    __widgetAttrs = __markoWidgets.attrs,
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_attrs = marko_helpers.as,
    marko_loadTag = marko_helpers.t,
    w_widget_tag = marko_loadTag(require("marko/widgets/taglib/widget-tag"));

function render(data, out) {
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
}

template._ = render;
