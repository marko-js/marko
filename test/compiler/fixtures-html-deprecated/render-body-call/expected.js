"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html-deprecated/render-body-call/template.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d,
    marko_forRange = require("marko/src/runtime/helper-forRange");

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(out, input, null, null, null, null, __component, "0");

  marko_dynamicTag(out, input.renderThing, null, null, null, null, __component, "1");

  marko_dynamicTag(out, input, function() {
    return attrs;
  }, null, null, null, __component, "2");

  marko_dynamicTag(out, renderBody, null, null, null, null, __component, "3");

  marko_dynamicTag(out, input.template, function() {
    return {
        x: 1
      };
  }, null, null, null, __component, "4");

  marko_dynamicTag(out, input.template, function() {
    return {
        y: function() {}
      };
  }, null, null, null, __component, "5");

  marko_dynamicTag(out, {
      render: input.barRenderer
    }, null, null, null, null, __component, "6");

  marko_dynamicTag(out, function(out) {
    input.barRenderer({}, true, out);
  }, null, null, null, null, __component, "7");

  if (x) {
    marko_dynamicTag(out, renderA, null, null, null, null, __component, "8");
  } else if (y) {
    marko_dynamicTag(out, renderB, null, null, null, null, __component, "9");
  } else {
    marko_dynamicTag(out, renderC, null, null, null, null, __component, "10");
  }

  if (x) {
    marko_dynamicTag(out, render, null, null, null, null, __component, "11");
  }

  if (!x) {
    marko_dynamicTag(out, render, null, null, null, null, __component, "12");
  }

  var $for$0 = 0;

  marko_forRange(0, 9, null, function(i) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    marko_dynamicTag(out, input.items[i], null, null, null, null, __component, "13" + $keyScope$0);
  });

  let i = 10;

  while (i--) {
    marko_dynamicTag(out, input, null, null, null, null, __component, "14");
  }

  if (z) {
    marko_dynamicTag(out, renderD, null, null, null, null, __component, "15");
  }

  // if.test
  if (async () => {}) {
      renderBody(out);
  }

  // if.consequent
  if (true) {
      async function x() {
          renderBody(out);
      }
  }

  // if.alternate
  if (false) {
  } else {
      async function x() {
          renderBody(out);
      }
  }

  // elseif.test
  if (false) {
  } else if (async () => {}) {
      renderBody(out);
  }

  // elseif.consequent
  if (false) {
  } else if (true) {
      async function x() {
          renderBody(out);
      }
  }

  // elseif.alternate
  if (false) {
  } else if (false) {
  } else {
      async function x() {
          renderBody(out);
      }
  }

  // for.init
  for (let x = (async () => {}); x < y; x++) {
      renderBody(out);
  }

  // for.test
  for (let x = 1; (async () => {}); x++) {
      renderBody(out);
  }

  // for.update
  for (let x = 1; x < y; (async () => {})) {
      renderBody(out);
  }

  // for.body
  for (let x = 1; x < y; x++) {
      async function x() {
          renderBody(out);
      }
  }

  // while.test
  while ((async () => {})) {
      renderBody(out);
  }

  // while.body
  while (true) {
      async function x() {
          renderBody(out);
      }
  }

  // dowhile.body
  do {
      async function x() {
          renderBody(out);
      }
  } while (true);
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html-deprecated/render-body-call/template.marko"
  };
