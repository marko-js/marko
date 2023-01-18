import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const a = 0;
  const b = 0;
  _write(`<button>${_escapeXML(a + b)}${_markHydrateNode(_scope, 1)}</button>${_markHydrateNode(_scope, 0)}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/batched-updates/template.marko_0_a_b");
  _writeHydrateScope(_scope, {
    2: a,
    3: b
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);