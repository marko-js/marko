import { write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  _write("<span>child</span>");
  const _return = x + 3;
  _writeScope(_scope0_id, {
    "/": _tagVar
  }, _scope0_);
  return _return;
}, "packages/translator/src/__tests__/fixtures/custom-tag-var-expression/components/child.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);