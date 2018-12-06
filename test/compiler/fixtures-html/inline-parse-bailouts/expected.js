"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/inline-parse-bailouts/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  // if.test
  if (async () => {}) {
  }

  // if.consequent
  if (true) {
      async function x() {
  
      }
  }

  // if.alternate
  if (false) {
  } else {
      async function x() {
  
      }
  }

  // elseif.test
  if (false) {
  } else if (async () => {}) {
  }

  // elseif.consequent
  if (false) {
  } else if (true) {
      async function x() {
  
      }
  }

  // elseif.alternate
  if (false) {
  } else if (false) {
  } else {
      async function x() {
  
      }
  }

  // for.init
  for (let x = (async () => {}); x < y; x++) {
  
  }

  // for.test
  for (let x = 1; (async () => {}); x++) {
  
  }

  // for.update
  for (let x = 1; x < y; (async () => {})) {
  
  }

  // for.body
  for (let x = 1; x < y; x++) {
      async function x() {
  
      }
  }

  // while.test
  while ((async () => {})) {}

  // while.body
  while (true) {
      async function x() {
  
      }
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/inline-parse-bailouts/template.marko"
  };
