var runtime = require(".");
var queueMicrotask = require("../queueMicrotask");
var util = require("../components/util");
var registry = require("../components/registry");
var updateManager = require("../components/update-manager");

var createTemplate = runtime.t;
var createComponent = registry.___createComponent;
var registered = {};
var queue;

runtime.t = function (typeName) {
  if (registered[typeName]) {
    return registered[typeName];
  }

  var renderFn;
  var template = (registered[typeName] = createTemplate(typeName));
  var instances = (template.___instances = []);
  Object.defineProperty(template, "_", {
    get: function () {
      return renderFn && proxyRenderer;
    },
    set: function (v) {
      renderFn = v;

      if (instances.length) {
        if (!queue) {
          queue = [];
          queueMicrotask(batchUpdate);
        }

        queue.push(function () {
          var newProto = registry.___getComponentClass(typeName).prototype;
          instances.forEach(function (instance) {
            if (hasLifecycleChanged(instance.__proto__, newProto)) {
              var startNode = instance.___rootNode.startNode;
              var endNode = instance.___rootNode.endNode;
              var parentNode = startNode.parentNode;
              var curNode;

              instance.___hmrDestroyed = true;
              instance.___emitDestroy();
              instance.___removeDOMEventListeners();

              if (instance.___subscriptions) {
                instance.___subscriptions.removeAllListeners();
                instance.___subscriptions = null;
              }

              while ((curNode = startNode.nextSibling) !== endNode) {
                util.___destroyNodeRecursive(curNode);
                parentNode.removeChild(curNode);
              }

              instance.___hmrDestroyed = false;
              instance.___mounted = false;
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
  var template = registered[typeName];
  var instance = createComponent(typeName, id);

  if (template) {
    var instances = template.___instances;
    instances.push(instance);
    instance.once("destroy", function () {
      if (!instance.___hmrDestroyed) {
        instances.splice(1, instances.indexOf(instance));
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
