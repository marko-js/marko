var runtime = require(".");
var queueMicrotask = require("../queueMicrotask");
var registry = require("@internal/components-registry");
var updateManager = require("../components/update-manager");

var createTemplate = runtime.t;
var createComponent = registry.___createComponent;
var registered = {};
var instancesByType = {};
var queue;

runtime.t = function (typeName) {
  if (registered[typeName]) {
    return registered[typeName];
  }

  var renderFn;
  var template = (registered[typeName] = createTemplate(typeName));
  var instances = (instancesByType[typeName] = new Set());
  Object.defineProperty(template, "_", {
    get: function () {
      return renderFn && proxyRenderer;
    },
    set: function (v) {
      renderFn = v;

      if (instances.size) {
        if (!queue) {
          queue = [];
          queueMicrotask(batchUpdate);
        }

        queue.push(function () {
          var newProto = registry.___getComponentClass(typeName).prototype;
          instances.forEach(function (instance) {
            if (hasLifecycleChanged(instance.__proto__, newProto)) {
              var renderer = instance.___renderer;
              instance.___renderer = (input, out) => {
                instance.___emitCreate(input, out);
                if (instance.onInput) {
                  input = instance.onInput(input, out) || input;
                }
                instance.___renderer = renderer;
                instance.___renderer(input, out);
              };

              instance.___hmrDestroyed = true;
              instance.___emitDestroy();
              instance.___mounted = false;

              if (instance.___subscriptions) {
                instance.___subscriptions.removeAllListeners();
                instance.___subscriptions = null;
              }
            }

            instance.__proto__ = newProto;
            instance
              .___rerender(instance.___input, false)
              .afterInsert(instance.___host);
          });
        });
      }
    }
  });

  return template;

  function proxyRenderer() {
    return renderFn.apply(this, arguments);
  }
};

registry.___createComponent = function (typeName, id) {
  var instances = instancesByType[typeName];
  var instance = createComponent(typeName, id);

  if (instances) {
    instances.add(instance);
    instance.once("destroy", function () {
      if (!instance.___hmrDestroyed) {
        instances.delete(instance);
      }
    });
  }

  return instance;
};

function hasLifecycleChanged(oldProto, newProto) {
  return (
    hasMethodChanged("onCreate") ||
    hasMethodChanged("onInput") ||
    hasMethodChanged("onRender") ||
    hasMethodChanged("onMount")
  );

  function hasMethodChanged(method) {
    return (
      (oldProto[method] && oldProto[method].toString()) !==
      (newProto[method] && newProto[method].toString())
    );
  }
}

function batchUpdate() {
  updateManager.___batchUpdate(function () {
    var pending = queue;
    queue = undefined;

    for (var i = 0; i < pending.length; i++) {
      pending[i]();
    }
  });
}

module.exports = runtime;
