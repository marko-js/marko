import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const z = {
    x: 1,
    y: 2
  };
  const {
    x,
    y
  } = z;
  _write(`<div>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/0")}</div>${_escapeXML(y)}${_markResumeNode(_scope0_id, "#text/1")}`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/const-tag-destructure/template.marko");