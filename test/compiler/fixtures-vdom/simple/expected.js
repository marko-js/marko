"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/compiler/fixtures-vdom/simple/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_forEach = marko_helpers.f,
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("295cea"),
    marko_node0 = marko_createElement("DIV", null, "4", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("No colors!"),
    marko_node1 = marko_createElement("DIV", null, "9", null, 1, 0, {
        i: marko_const_nextId()
      })
      .t("No colors!");

function render(input, out, __component, component, state) {
  var data = input;

  out.t("Hello ");

  out.t(input.name);

  out.t("! ");

  if (input.colors.length) {
    out.be("UL", null, "0", component);

    var for__1 = 0;

    marko_forEach(input.colors, function(color) {
      var keyscope__2 = "[" + ((for__1++) + "]");

      out.e("LI", null, "3" + keyscope__2, component, 1)
        .t(color);
    });

    out.ee();
  } else {
    out.n(marko_node0, component);
  }

  if (input.colors.length) {
    out.be("UL", null, "5", component);

    var for__6 = 0;

    marko_forEach(input.colors, function(color) {
      var keyscope__7 = "[" + ((for__6++) + "]");

      out.e("LI", null, "8" + keyscope__7, component, 1)
        .t(color);
    });

    out.ee();
  } else {
    out.n(marko_node1, component);
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
