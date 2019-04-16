"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/compiler/fixtures-vdom/macro-in-loop/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_forRange = require("marko/src/runtime/helper-forRange"),
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_forEach = marko_helpers.f,
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  var for__0 = 0;

  marko_forRange(0, 10, null, function(i) {
    var keyscope__1 = "[" + ((for__0++) + "]");

    out.e("DIV", null, "2" + keyscope__1, component, 1)
      .t(i);

    function macro_renderTree(out, node) {
      out.t("Name: ");

      out.t(node.name);

      out.t(" Children: ");

      if (node.children) {
        out.be("UL", null, "3", component);

        var for__4 = 0;

        marko_forEach(node.children, function(child) {
          var keyscope__5 = "[" + ((for__4++) + "]");

          out.be("LI", null, "6" + keyscope__5, component);

          marko_dynamicTag(out, macro_renderTree, child, null, null, __component, "7" + keyscope__5);

          out.ee();
        });

        out.ee();
      }
    }

    marko_dynamicTag(out, macro_renderTree, input.nodes[i], null, null, __component, "8" + keyscope__1);
  });
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
