import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  value
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`Static <!>${_escapeXML(value)}${_markHydrateNode(_scope0_id, "#text/0")}`);
}, "packages/translator/src/__tests__/fixtures/update-text/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);