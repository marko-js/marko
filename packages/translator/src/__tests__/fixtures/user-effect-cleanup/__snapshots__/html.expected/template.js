import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope = _nextScopeId();
  const a = 0;
  const b = 0;
  _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML("" + a + b)}</div>`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko_0_value");
  _writeHydrateScope(_scope, {
    1: value
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);