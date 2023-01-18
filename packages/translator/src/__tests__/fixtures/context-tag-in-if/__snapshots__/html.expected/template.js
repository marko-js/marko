import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, popContext as _popContext, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const show = true;
  _write("<div>");
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko", 123);
  if (show) {
    const _scope = _nextScopeId();
    _write("<span>");
    const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko");
    _write(`${_escapeXML(x)}${_markHydrateNode(_scope, 0)}</span>`);
  }
  _popContext();
  _write(`<button id=toggle>Toggle</button>${_markHydrateNode(_scope, 2)}</div>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/context-tag-in-if/template.marko_0_show");
  _writeHydrateScope(_scope, {
    3: show
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);