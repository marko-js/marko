var complain = "MARKO_DEBUG" && require("complain");
var queueMicrotask = require("../../queueMicrotask");
var defineComponent = require("../defineComponent");
var initComponents = require("../init-components");
require("../entry");

var registered = {};
var loaded = {};
var componentTypes = {};
var pendingDefs;

function register(type, def) {
  var pendingForType;
  if (pendingDefs) {
    pendingForType = pendingDefs[type];
  }
  registered[type] = def;
  delete loaded[type];
  delete componentTypes[type];

  if (pendingForType) {
    delete pendingDefs[type];
    queueMicrotask(function () {
      pendingForType.forEach(function (args) {
        initComponents.___tryHydrateComponent(
          args[0],
          args[1],
          args[2],
          args[3]
        )();
      });
    });
  }

  return type;
}

function addPendingDef(def, type, meta, host, runtimeId) {
  if (!pendingDefs) {
    pendingDefs = {};

    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      document.addEventListener("load", function () {
        var pendingComponentIds = Object.keys(pendingDefs);
        if (pendingComponentIds.length) {
          complain(
            "Marko templates were never loaded for: " + pendingComponentIds
          );
        }
      });
    }
  }
  (pendingDefs[type] = pendingDefs[type] || []).push([
    def,
    meta,
    host,
    runtimeId
  ]);
}

function isRegistered(type) {
  return Boolean(registered[type]);
}

function load(typeName) {
  var target = loaded[typeName];
  if (!target) {
    target = registered[typeName];

    if (target) {
      target = target();
    }

    if (!target) {
      throw Error("Component not found: " + typeName);
    }

    loaded[typeName] = target;
  }

  return target;
}

function getComponentClass(typeName) {
  var ComponentClass = componentTypes[typeName];

  if (ComponentClass) {
    return ComponentClass;
  }

  ComponentClass = load(typeName);

  ComponentClass = ComponentClass.Component || ComponentClass;

  if (!ComponentClass.___isComponent) {
    ComponentClass = defineComponent(ComponentClass, ComponentClass.renderer);
  }

  // Make the component "type" accessible on each component instance
  ComponentClass.prototype.___type = typeName;

  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    var classNameMatch =
      /\/([^/]+?)(?:\/index|\/template|)(?:\.marko|\.component(?:-browser)?|)$/.exec(
        typeName
      );
    var className = classNameMatch ? classNameMatch[1] : "AnonymousComponent";
    className = className.replace(/-(.)/g, function (g) {
      return g[1].toUpperCase();
    });
    className = className
      .replace(/\$\d+\.\d+\.\d+$/, "")
      .replace(/^[^a-z$_]/i, "_$&")
      .replace(/[^0-9a-z$_]+/gi, "_");
    className = className[0].toUpperCase() + className.slice(1);
    // eslint-disable-next-line no-unused-vars
    try {
      var OldComponentClass = ComponentClass;
      eval(
        "ComponentClass = function " +
          className +
          "(id, doc) { OldComponentClass.call(this, id, doc); }"
      );
      ComponentClass.prototype = OldComponentClass.prototype;
    } catch (e) {
      /** ignore error */
    }
  }

  componentTypes[typeName] = ComponentClass;

  return ComponentClass;
}

function createComponent(typeName, id) {
  var ComponentClass = getComponentClass(typeName);
  return new ComponentClass(id);
}

exports.r = register;
exports.___getComponentClass = getComponentClass;
exports.___createComponent = createComponent;
exports.___isRegistered = isRegistered;
exports.___addPendingDef = addPendingDef;
