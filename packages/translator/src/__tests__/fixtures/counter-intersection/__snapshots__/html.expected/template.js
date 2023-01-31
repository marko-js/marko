import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const a = 0;
  const b = 0;
  _write(`<div><button class=a>${_escapeXML(a)}${_markHydrateNode(_scope0_, "#text/1")}</button>${_markHydrateNode(_scope0_, "#button/0")} + <button class=b>${_escapeXML(b)}${_markHydrateNode(_scope0_, "#text/3")}</button>${_markHydrateNode(_scope0_, "#button/2")} = <!>${_escapeXML(a + b)}${_markHydrateNode(_scope0_, "#text/4")}</div>`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/counter-intersection/template.marko_0");
  _writeHydrateScope(_scope0_, {
    "a": a,
    "b": b
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);