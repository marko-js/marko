import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const clickCount = 0;
  _write(`${_markHydrateNode(_scope, 0)}<button>${_markHydrateNode(_scope, 1)}${_escapeXML(clickCount)}</button>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/dynamic-event-handlers/template.marko_0_clickCount");
  _writeHydrateScope(_scope, {
    2: clickCount
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);