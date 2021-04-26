var runtime = require(".");
var createTemplate = runtime.t;
var registered = {};

runtime.t = function (typeName) {
  if (registered[typeName]) {
    return registered[typeName];
  }

  var renderFn;
  var template = (registered[typeName] = createTemplate(typeName));
  Object.defineProperty(template, "_", {
    get: function () {
      return renderFn && proxyRenderFn;
    },
    set: function (v) {
      renderFn = v;
    }
  });

  return template;

  function proxyRenderFn() {
    return renderFn.apply(this, arguments);
  }
};

module.exports = runtime;
