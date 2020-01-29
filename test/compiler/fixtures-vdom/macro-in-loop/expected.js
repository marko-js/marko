var marko_template = module.exports = require("marko/src/vdom").t(),
    components_registry_browser = require("marko/src/runtime/components/registry-browser"),
    marko_registerComponent = components_registry_browser.r,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/compiler/fixtures-vdom/macro-in-loop/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_defineComponent = require("marko/src/runtime/components/defineComponent"),
    marko_forRange = require("marko/src/runtime/helpers/for-range"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag");

function render(input, out, __component, component, state) {
  var data = input;

  var $for$0 = 0;

  marko_forRange(0, 10, null, function(i) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.e("div", null, "0" + $keyScope$0, component, 1)
      .t(i);

    function macro_renderTree(out, node) {
      out.t("Name: ");

      out.t(node.name);

      out.t(" Children: ");

      if (node.children) {
        out.be("ul", null, "1", component);

        var $for$1 = 0;

        marko_forOf(node.children, function(child) {
          var $keyScope$1 = "[" + (($for$1++) + "]");

          out.be("li", null, "2" + $keyScope$1, component);

          marko_dynamicTag(out, macro_renderTree, function() {
            return child;
          }, null, null, null, __component, "3" + $keyScope$1);

          out.ee();
        });

        out.ee();
      }
    }

    marko_dynamicTag(out, macro_renderTree, function() {
      return input.nodes[i];
    }, null, null, null, __component, "4" + $keyScope$0);
  });
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);
