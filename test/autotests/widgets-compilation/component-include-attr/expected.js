var template = require("marko/html").c(__filename);

module.exports = template;

var marko_widgets = require("marko/widgets/index"),
    marko_registerWidget = marko_widgets.registerWidget,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/component-include-attr/index", function() {
      return require("./");
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/widgets/taglib/include-tag")),
    marko_attr = marko_helpers.a,
    _widget_tag = marko_loadTag(require("marko/widgets/taglib/widget-tag"));

function render(data, out) {
  _widget_tag({
      type: marko_widgetType,
      body: 0,
      _cfg: data.widgetConfig,
      _state: data.widgetState,
      _props: data.widgetProps,
      _body: data.widgetBody,
      renderBody: function renderBody(out, widget, state) {
        out.w("<div" +
          marko_attr("id", widget.id) +
          "><h1>Header</h1><div" +
          marko_attr("id", widget.elId(0)) +
          ">");

        include_tag({
            _target: data.widgetBody,
            _widgetId: widget.elId(0),
            _arg: widget
          }, out);

        out.w("</div></div>");
      }
    }, out);
}

template._ = render;
