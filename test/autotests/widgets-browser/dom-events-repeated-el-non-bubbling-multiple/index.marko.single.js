var marko_template = module.exports = require("marko/vdom").t(__filename),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-browser/dom-events-repeated-el-non-bubbling-multiple/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_forEach = marko_helpers.f;

var marko_component = {
    handleColorMouseOver: function (color) {
        this.mouseOverColor = color;
    },
    handleColorMouseOut: function (color) {
        this.mouseOutColor = color;
    }
};

function render(data, out, widget, state) {
  out.be("div", {
      id: widget.id
    });

  out.be("ul");

  marko_forEach(data.colors, function(color) {
    var __widgetId1 = widget.elId("0[]");

    widget.e("mouseover", "handleColorMouseOver", __widgetId1, [
        color
      ]);

    out.e("li", {
        id: __widgetId1
      }, 1)
      .t(color);
  });

  out.ee();

  out.ee();
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);
