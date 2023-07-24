import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, toString as _toString, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`Hello <!>${_escapeXML(input.name)}${_markResumeNode(_scope0_id, "#text/0")}! Hello <!>${_toString(input.name)}${_markResumeNode(_scope0_id, "#text/1")}! Hello <!>${_toString(input.missing)}${_markResumeNode(_scope0_id, "#text/2")}!`);
}, "packages/translator/src/__tests__/fixtures/hello-dynamic/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);