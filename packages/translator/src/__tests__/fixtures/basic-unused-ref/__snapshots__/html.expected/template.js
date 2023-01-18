import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const unused_1 = 123;
  const unused_2 = 456;
  const clickCount = 0;
  _write(`<div><button>${_escapeXML(clickCount)}${_markHydrateNode(_scope, 1)}</button>${_markHydrateNode(_scope, 0)}</div>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount");
  _writeHydrateScope(_scope, {
    4: clickCount
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);