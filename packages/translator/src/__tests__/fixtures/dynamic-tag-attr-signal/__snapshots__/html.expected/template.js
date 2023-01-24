import { classAttr as _classAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const className = "A";
  _write(`<p${_classAttr(className)}>paragraph</p>${_markHydrateNode(_scope, "#undefined/0")}<button></button>${_markHydrateNode(_scope, "#button/1")}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className");
  _writeHydrateScope(_scope, {
    "className": className
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);