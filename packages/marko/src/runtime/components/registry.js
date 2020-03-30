"use strict";
const copyProps = require("raptor-util/copyProps");
const constructorCache = new Map();
const BaseServerComponent = require("./ServerComponent");

function createServerComponentClass(renderingLogic) {
  var renderingLogicProps =
    typeof renderingLogic === "function"
      ? renderingLogic.prototype
      : renderingLogic;

  class ServerComponent extends BaseServerComponent {}

  copyProps(renderingLogicProps, ServerComponent.prototype);

  return ServerComponent;
}
function createComponent(
  renderingLogic,
  id,
  input,
  out,
  typeName,
  customEvents,
  scope
) {
  let ServerComponent;

  if (renderingLogic) {
    ServerComponent = constructorCache.get(renderingLogic);

    if (!ServerComponent) {
      ServerComponent = createServerComponentClass(renderingLogic);
      constructorCache.set(renderingLogic, ServerComponent);
    }
  } else {
    ServerComponent = BaseServerComponent;
  }

  return new ServerComponent(id, input, out, typeName, customEvents, scope);
}

exports.___isServer = true;
exports.___createComponent = createComponent;
