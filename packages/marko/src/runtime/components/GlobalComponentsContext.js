var nextComponentIdProvider = require("./util").___nextComponentIdProvider;
var KeySequence = require("./KeySequence");

function GlobalComponentsContext(out) {
  this.___renderedComponentsById = {};
  this.___rerenderComponent = undefined;
  this.___nextComponentId = nextComponentIdProvider(out);
}

GlobalComponentsContext.prototype = {
  ___createKeySequence: function() {
    return new KeySequence();
  }
};

module.exports = GlobalComponentsContext;
