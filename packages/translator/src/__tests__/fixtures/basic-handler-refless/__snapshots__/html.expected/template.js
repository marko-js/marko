import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const data = 0;
  _write(`<button>${_escapeXML(data)}${_markHydrateNode(_scope, "#text/1")}</button>${_markHydrateNode(_scope, "#button/0")}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-handler-refless/template.marko_0");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);