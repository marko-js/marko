"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              message: "didnt run it"
            };

          if (true) {
            runIt(() => {
                this.state.message = 'ran it';
            });
          }
        }
      },
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures-html/arrow-functions/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function runIt(fn) {
    fn()
};

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>Broken [" +
    marko_escapeXml(state.message) +
    "]</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures-html/arrow-functions/index.marko",
    component: "./"
  };
