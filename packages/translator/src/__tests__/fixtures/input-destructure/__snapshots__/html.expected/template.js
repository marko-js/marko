import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const {
    a,
    b
  } = input;
  _write(`${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/0")} <!>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/1")}`);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/input-destructure/template.marko");