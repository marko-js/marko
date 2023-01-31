import { classAttr as _classAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const className = "A";
  _write(`<p${_classAttr(className)}>paragraph</p>${_markHydrateNode(_scope0_id, "#p/0")}<button></button>${_markHydrateNode(_scope0_id, "#button/1")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className");
  _writeHydrateScope(_scope0_id, {
    "className": className
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);