import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const x = 0;
  const prev = false;
  _write(`<div>x=<span>${_escapeXML(x)}${_markHydrateNode(_scope, "#text/0")}</span>, was=<!>${_escapeXML(prev)}${_markHydrateNode(_scope, "#text/1")}</div><button id=increment>Increment</button>${_markHydrateNode(_scope, "#button/2")}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x");
  _writeHydrateScope(_scope, {
    "x": x
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);