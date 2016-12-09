var template = require("marko/html").c(__filename);

module.exports = template;

var marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.registerWidget,
    marko_widgetTypes = {
        "default": marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/widget-types/widget", function() {
          return require("./widget");
        }),
        mobile: marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/widget-types/widget-mobile", function() {
          return require("./widget-mobile");
        })
      },
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    _widget_tag = marko_loadTag(require("marko/widgets/taglib/widget-tag"));

function render(data, out) {
  out.w("<widget-types default=\"./widget\" mobile=\"./widget-mobile\"></widget-types>");

  _widget_tag({
      type: marko_widgetTypes[data.isMobile ? "default" : "mobile"],
      _cfg: data.widgetConfig,
      _state: data.widgetState,
      _props: data.widgetProps,
      _body: data.widgetBody,
      renderBody: function renderBody(out, widget, state) {
        out.w("<div" +
          marko_attr("id", widget.id) +
          "></div>");
      }
    }, out);
}

template._ = render;
