var marko_template = module.exports = require("marko/html").t(__filename),
    marko_widgets = require("marko/widgets/legacy"),
    marko_registerWidget = marko_widgets.rw,
    marko_defineWidget = marko_widgets.w,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation-deprecated/component-include-attr/index", function() {
      return marko_defineWidget(require("./"));
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/widgets/taglib/include-tag")),
    marko_attr = marko_helpers.a;

function render(input, out, widget, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", widget.id) +
    "><h1>Header</h1><div" +
    marko_attr("id", widget.elId(0)) +
    ">");

  include_tag({
      _target: widget.b,
      _elId: widget.elId(0),
      _arg: widget
    }, out);

  out.w("</div></div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType,
    body: 0
  });

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        },
      {
          type: "require",
          path: "marko/widgets"
        }
    ],
    tags: [
      "marko/widgets/taglib/include-tag"
    ]
  };
