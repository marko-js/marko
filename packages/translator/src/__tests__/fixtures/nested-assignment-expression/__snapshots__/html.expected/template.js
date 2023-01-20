import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const clickCount = 0;
  const lastCount = 0;
  const lastCount2 = 0;
  _write(`<button>${_escapeXML(clickCount)}${_markHydrateNode(_scope, "#text/1")}</button>${_markHydrateNode(_scope, "#button/0")}used to be <span>${_escapeXML(lastCount)}${_markHydrateNode(_scope, "#text/2")}</span> which should be the same as <span>${_escapeXML(lastCount2)}${_markHydrateNode(_scope, "#text/3")}</span>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount");
  _writeHydrateScope(_scope, {
    "clickCount": clickCount
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);