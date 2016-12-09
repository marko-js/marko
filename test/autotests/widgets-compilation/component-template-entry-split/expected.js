var template = require("marko/html").c(__filename);

var renderer = require("./renderer");

var marko_widgets = require("marko/widgets");

module.exports = marko_widgets.r(renderer, template);

var marko_registerWidget = marko_widgets.registerWidget,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/component-template-entry-split/widget", function() {
      return require("./widget");
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    _widget_tag = marko_loadTag(require("marko/widgets/taglib/widget-tag"));

function render(data, out) {
  _widget_tag({
      type: marko_widgetType,
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
