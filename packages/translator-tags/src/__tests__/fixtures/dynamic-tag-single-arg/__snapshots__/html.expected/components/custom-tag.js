import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write(`<div>${_escapeXML(input)}${_markResumeNode(_scope0_id, "#text/0")}</div>`);
  const _return = "hello from other";
  _writeScope(_scope0_id, {
    "/": _tagVar
  });
  return _return;
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-single-arg/components/custom-tag.marko");