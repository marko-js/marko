import { classAttr as _classAttr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const tagName = "span";
  const className = "A";
  _write(`<${tagName}${_classAttr(className)}>body content</${tagName}>${_markHydrateNode(_scope, "#undefined/0")}<button></button>${_markHydrateNode(_scope, "#button/1")}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/dynamic-native-dynamic-tag/template.marko_0_tagName");
  _writeHydrateScope(_scope, {
    "tagName": tagName
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);