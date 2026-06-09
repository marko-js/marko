"use strict";

var getLoadedTemplate =
  require("@internal/components-registry").___getLoadedTemplate;

module.exports = function loadTag(typeId, load, trigger) {
  var loading;
  var hydratedComponents = new WeakSet();
  var pending = new Set();
  var start = trigger ? trigger(load) : load;
  return {
    _: function loadRenderer(input, out) {
      var component = out.___assignedComponentDef.___component;
      var template = getLoadedTemplate(typeId);

      if (!template) {
        if (!loading) {
          loading = start().then(function () {
            pending = pending.forEach(function (c) {
              c.___destroyed ||
                c.___rerender(c.___input, true).afterInsert(c.___host);
            });
          });
        }
        pending.add(component);
      }

      if (out.___components.___globalContext.___isHydrate) {
        hydratedComponents.add(component);
      }

      if (hydratedComponents.has(component)) {
        out.bf(out.___assignedKey + "s", component, true).ef();
      }

      out.bf(out.___assignedKey, component, !template);

      if (template) {
        template._(input, out);
      }

      out.ef();
    },
  };
};
