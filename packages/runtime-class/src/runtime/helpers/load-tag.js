"use strict";

module.exports = function loadTag(load) {
  var template;
  var pending;
  var waiting = [];

  return {
    _: function loadRenderer(input, out) {
      if (template) {
        template._(input, out);
        return;
      }

      var componentDef = out.___assignedComponentDef;
      var component = componentDef && componentDef.___component;
      out.bf(out.___assignedKey, component).ef(); // TODO: should probably be preserved fragment.

      if (component && waiting.indexOf(component) === -1) {
        waiting.push(component);
      }

      if (!pending) {
        pending = load().then(function (mod) {
          var components = waiting;
          template = mod.default || mod;
          waiting = [];
          for (var i = 0; i < components.length; i++) {
            components[i].forceUpdate();
          }
        });
      }
    },
  };
};
