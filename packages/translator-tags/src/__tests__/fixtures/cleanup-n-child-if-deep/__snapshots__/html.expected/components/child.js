import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, markResumeCleanup as _markResumeCleanup, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    name,
    write
  } = input;
  _write(`<div>${_escapeXML(name)}${_markResumeNode(_scope0_id, "#text/0")} a</div><span>${_escapeXML(name)}${_markResumeNode(_scope0_id, "#text/1")} a</span><p>${_escapeXML(name)}${_markResumeNode(_scope0_id, "#text/2")} a</p>${_markResumeCleanup(_scope0_id)}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/components/child.marko_0_name_write");
  _writeScope(_scope0_id, {
    "name": name,
    "write": write
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/components/child.marko");