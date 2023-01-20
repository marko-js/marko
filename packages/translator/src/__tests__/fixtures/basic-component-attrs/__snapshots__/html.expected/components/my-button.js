import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  onClick,
  text
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`<button>${_escapeXML(text)}${_markHydrateNode(_scope, "#text/1")}</button>${_markHydrateNode(_scope, "#button/0")}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onClick");
  _writeHydrateScope(_scope, {
    "onClick": onClick
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);