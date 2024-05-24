import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    a: {
      b
    }
  } = input;
  const {
    a
  } = input;
  const {
    b: c
  } = a;
  _write(`<button>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/0")} <!>${_escapeXML(c)}${_markResumeNode(_scope0_id, "#text/1")}</button>`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/same-source-alias-pattern-and-identifier/template.marko");