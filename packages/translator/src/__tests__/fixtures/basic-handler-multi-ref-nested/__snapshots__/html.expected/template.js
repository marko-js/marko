import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const a = [0];
  const b = 1;
  _write(`${_markHydrateNode(_scope, 0)}<button>${_markHydrateNode(_scope, 1)}${_escapeXML(a.join(""))}</button>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b");
  _writeHydrateScope(_scope, {
    2: a,
    3: b
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);