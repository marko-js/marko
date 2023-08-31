import { write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const y = 2;
  _write("<span>child</span>");
  const _return = x + y;
  _writeScope(_scope0_id, {
    "x": x,
    "y": y,
    "/": _tagVar
  }, _scope0_);
  return _return;
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/custom-tag-var-multiple/components/child.marko");