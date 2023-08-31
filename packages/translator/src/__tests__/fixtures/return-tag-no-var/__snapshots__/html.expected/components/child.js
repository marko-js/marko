import { write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  _write("<span>child</span>");
  const _return = x;
  _writeScope(_scope0_id, {
    "/": _tagVar
  }, _scope0_);
  return _return;
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/return-tag-no-var/components/child.marko");