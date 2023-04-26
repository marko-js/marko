import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const {
    a,
    b
  } = input;
  _write(`${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/0")} <!>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/1")}`);
}, "packages/translator/src/__tests__/fixtures/input-destructure/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);