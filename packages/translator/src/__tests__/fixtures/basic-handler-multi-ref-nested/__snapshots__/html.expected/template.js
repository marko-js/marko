import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const a = [0];
  const b = 1;
  _write(`<button>${_escapeXML(a.join(""))}${_markHydrateNode(_scope, "#text/1")}</button>${_markHydrateNode(_scope, "#button/0")}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b");
  _writeHydrateScope(_scope, {
    "a": a,
    "b": b
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);