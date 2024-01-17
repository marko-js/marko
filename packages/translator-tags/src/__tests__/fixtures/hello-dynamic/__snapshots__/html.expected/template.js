import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`Hello <!>${_escapeXML(input.name)}${_markResumeNode(_scope0_id, "#text/0")}! Hello <!>${_toString(input.name)}${_markResumeNode(_scope0_id, "#text/1")}! Hello <!>${_toString(input.missing)}${_markResumeNode(_scope0_id, "#text/2")}!`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/hello-dynamic/template.marko");