import { nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const _return = 1;
  _writeHydrateScope(_scope0_, {
    "/": _tagVar
  });
  return _return;
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);