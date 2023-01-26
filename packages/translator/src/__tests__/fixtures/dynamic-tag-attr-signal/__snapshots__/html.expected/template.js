import { classAttr as _classAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const className = "A";
  _write(`<p${_classAttr(className)}>paragraph</p>${_markHydrateNode(_scope0_, "#undefined/0")}<button></button>${_markHydrateNode(_scope0_, "#button/1")}`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className");
  _writeHydrateScope(_scope0_, {
    "className": className
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);