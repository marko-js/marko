"use strict";

module.exports = function lazyTag(load) {
  var template;
  var pending;
  var waiting = [];

  return {
    _: function lazyRenderer(input, out) {
      if (template) {
        template._(input, out);
        return;
      }

      var componentDef = out.___assignedComponentDef;
      var component = componentDef && componentDef.___component;
      out.bf(out.___assignedKey, component).ef();

      if (component && waiting.indexOf(component) === -1) {
        waiting.push(component);
      }

      if (!pending) {
        pending = load().then(function (mod) {
          var components = waiting;
          template = mod.default || mod;
          waiting = 0;
          for (var i = 0; i < components.length; i++) {
            components[i].forceUpdate();
          }
        });
      }
    },
  };
};
