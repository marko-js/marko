var nextComponentIdProvider = require("./util").___nextComponentIdProvider;

function GlobalComponentsContext(out) {
  this.___renderedComponentsById = {};
  this.___rerenderComponent = undefined;
  this.___nextComponentId = nextComponentIdProvider(out);
}

module.exports = GlobalComponentsContext;
