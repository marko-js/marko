"use strict";
/* jshint newcap:false */

var BaseState;
var BaseComponent;
var inherit;
var jQuery = require("../jquery");
var ready = require("../ready");

var complain = "MARKO_DEBUG" && require("complain");
var stateToJSONDef = {
  enumerable: false,
  value: function returnSelf() {
    return this;
  }
};
function noop() {}

module.exports = function defineWidget(def, renderer) {
  def = def.Widget || def;

  if (def.___isComponent) {
    return def;
  }

  var ComponentClass = function() {};
  var proto;
  var legacyInit;

  if (typeof def === "function") {
    proto = def.prototype;
    legacyInit = def;
  } else if (typeof def === "object") {
    proto = def;
    legacyInit = def.init;
  } else {
    throw TypeError();
  }

  ComponentClass.prototype = proto;

  // We don't use the constructor provided by the user
  // since we don't invoke their constructor until
  // we have had a chance to do our own initialization.
  // Instead, we store their constructor in the "initComponent"
  // property and that method gets called later inside
  // init-components-browser.js
  function Component(id, doc) {
    BaseComponent.call(this, id, doc);
  }

  if (!proto.___isComponent) {
    // Inherit from Component if they didn't already
    ComponentClass.prototype = Object.create(BaseComponent.prototype);
    for (var propName in proto) {
      if (proto.hasOwnProperty(propName)) {
        ComponentClass.prototype[propName] = proto[propName];
      }
    }
  }

  // The same prototype will be used by our constructor after
  // we he have set up the prototype chain using the inherit function
  proto = Component.prototype = ComponentClass.prototype;
  proto.___isLegacy = true;

  proto.constructor = def.constructor = Component;

  Object.defineProperty(proto, "state", {
    get: function() {
      var raw = this.___state && this.___state.___raw;

      if (raw && !raw.toJSON) {
        Object.defineProperty(this.___state.___raw, "toJSON", stateToJSONDef);
      }

      return raw;
    },
    set: function(newState) {
      newState = newState || {};
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        if (
          Object.keys(newState)
            .sort()
            .join("") !==
          Object.keys((this.___state && this.___state.___raw) || {})
            .sort()
            .join("")
        )
          complain(
            "'widget.state = newState' has changed from merging the newState to replacing the old state."
          );
      }

      this.setState(newState);
    }
  });

  Object.defineProperty(proto, "__document", {
    get: function() {
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        complain("__document is deprecated");
      }
      return this.___document;
    }
  });

  Object.defineProperty(proto, "el", {
    get: function() {
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        if (
          this.___currentLegacyBindEl !==
          (this.___rootNode && this.___rootNode.firstChild)
        ) {
          complain(
            "this.el no longer returns the `w-bind` element and instead returns the first node in the template. Assign a key to the w-bind element and use getEl(key) instead."
          );
        }
      }

      return this.___currentLegacyBindEl;
    }
  });

  // get legacy methods

  proto.___legacyOnRender = proto.onRender;
  Object.defineProperty(proto, "onRender", {
    get: noop,
    set: function(v) {
      proto.___legacyOnRender = v;
    }
  });

  proto.___legacyOnUpdate = proto.onUpdate;
  Object.defineProperty(proto, "onUpdate", {
    get: function() {
      return modernMountOrUpdate;
    },
    set: function(v) {
      proto.___legacyOnUpdate = v;
    }
  });

  proto.___legacyOnDestroy = proto.onDestroy;
  Object.defineProperty(proto, "onDestroy", {
    get: function() {
      return modernOnDestory;
    },
    set: function(v) {
      proto.___legacyOnDestroy = v;
    }
  });

  proto.getWidget = proto.getComponent;
  proto.getWidgets = proto.getComponents;
  proto.onMount = modernMountOrUpdate;

  if (legacyInit) {
    proto.___legacyInit = legacyInit;
  }

  // convert legacy to modern
  proto.___modernUpdate = proto.update;
  proto.update = function() {
    if (this.___destroyed) {
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        complain(
          "widget was updated after it was destroyed, if this widget is migrated to a modern component this will become a noop.",
          {
            location: this.___type
          }
        );
      }

      this.destroy = modernOnDestory;
      this.___destroyed = false;
    }
    this.___legacyExplicitUpdate = true;
    if (this.___currentLegacyBindEl) {
      this.onBeforeUpdate && this.onBeforeUpdate();
    }

    this.___modernUpdate();
    this.___legacyExplicitUpdate = false;
  };

  function modernMountOrUpdate() {
    var self = this;
    var el = this.___keyedElements["@_wbind"];
    var prevEl = this.___currentLegacyBindEl;

    if (prevEl !== el) {
      this.___currentLegacyBindEl = el;

      if (prevEl) {
        this.onBeforeDestroy && this.onBeforeDestroy();
        this.___legacyOnDestroy && this.___legacyOnDestroy();
        this.___legacyRender = undefined;
        this.removeAllListeners();
      }

      if (el) {
        this.___legacyInit && this.___legacyInit(this.widgetConfig || {});
        this.___legacyOnRender && this.___legacyOnRender({ firstRender: true });
        this.___legacyRender = legacyRender;

        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
          Object.defineProperty(el, "__widget", {
            configurable: true,
            get: function() {
              complain("__widget is deprecated");
              return self;
            }
          });
        } else {
          el.__widget = this;
        }
      }
    } else if (el) {
      if (prevEl) {
        this.___legacyOnUpdate && this.___legacyOnUpdate();
      }

      if (this.___didUpdate) {
        this.___legacyOnRender &&
          this.___legacyOnRender({ firstRender: false });
      }
    }

    this.___widgetProps = this.___input;
    this.___input = null;
    this.___didUpdate = false;
  }

  function legacyRender() {
    if (!this.___legacyExplicitUpdate) {
      this.onBeforeUpdate && this.onBeforeUpdate();
    }

    this.___didUpdate = true;
  }

  function modernOnDestory() {
    if (this.___currentLegacyBindEl) {
      this.onBeforeDestroy && this.onBeforeDestroy();
      this.___legacyOnDestroy && this.___legacyOnDestroy();
      this.___currentLegacyBindEl = null;
    }
  }

  // Set a flag on the constructor function to make it clear this is
  // a component so that we can short-circuit this work later
  Component.___isComponent = true;

  function State() {
    BaseState.apply(this, arguments);
  }
  inherit(State, BaseState);
  proto.___State = State;

  jQuery.patchComponent(
    window.$,
    proto,
    true /* don't throw error until used if `$` is missing*/
  );

  ready.patchComponent(proto);

  if (!renderer) {
    renderer = ComponentClass.renderer || ComponentClass.prototype.renderer;
    if (renderer) {
      // Legacy support
      var createOut = renderer.createOut;
      if (typeof renderer !== "function") {
        var rendererObject = renderer;
        renderer = function(input, out) {
          var rendererFunc = rendererObject.renderer || rendererObject.render;
          rendererFunc(input, out);
        };
        renderer.createOut = createOut;
      }

      renderer.render = function(input) {
        var out = createOut();
        renderer(input, out);
        return out.end();
      };
    }
  }

  if (renderer) {
    // Add the rendering related methods as statics on the
    // new component constructor function
    Component.renderer = proto.___renderer = renderer;
    Component.render = renderer.render;
    Component.renderSync = renderer.renderSync;
  }

  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    Object.defineProperty(Component, "_isWidget", {
      get: function() {
        complain("_isWidget is deprecated");
        return true;
      }
    });
  } else {
    Component._isWidget = true;
  }

  return Component;
};

BaseState = require("../State");
BaseComponent = require("../Component");
inherit = require("raptor-util/inherit");
