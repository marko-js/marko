import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const x = 1;
  const y = 0;
  _write(`<span>${_markHydrateNode(_scope, 0)}${_escapeXML(x)}</span><span>${_markHydrateNode(_scope, 1)}${_escapeXML(y)}</span>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/let-tag-set-in-effect/template.marko_0_x");
  _writeHydrateScope(_scope, {
    2: x
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);