import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const a = 0;
  const b = 0;
  _write(`<div>${_escapeXML("" + a + b)}${_markHydrateNode(_scope0_, "#text/0")}</div>`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko_0_value");
  _writeHydrateScope(_scope0_, {
    "value": value,
    "a": a,
    "b": b
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);