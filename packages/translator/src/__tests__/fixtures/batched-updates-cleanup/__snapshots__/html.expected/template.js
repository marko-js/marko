import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const show = true;
  const message = "hi";
  _write(`<button></button>${_markHydrateNode(_scope, "#button/0")}`);
  if (show) {
    const _scope = _nextScopeId();
    _write(`<span>${_escapeXML(message)}${_markHydrateNode(_scope, "#text/0")}</span>`);
  }
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/batched-updates-cleanup/template.marko_0_show");
  _writeHydrateScope(_scope, {
    "show": show
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);