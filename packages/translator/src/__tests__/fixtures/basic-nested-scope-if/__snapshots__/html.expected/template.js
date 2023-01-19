import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const clickCount = 0;
  _write("<div>");
  if (clickCount < 3) {
    const _scope = _nextScopeId();
    _write(`<button>${_escapeXML(clickCount)}${_markHydrateNode(_scope, 1)}</button>${_markHydrateNode(_scope, 0)}`);
    _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount");
    _writeHydrateScope(_scope, {
      1: clickCount
    });
  } else {
    const _scope = _nextScopeId();
    _write(`<span>The button was clicked <!>${_escapeXML(clickCount)}${_markHydrateNode(_scope, 0)} times.</span>`);
  }
  _write("</div>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);