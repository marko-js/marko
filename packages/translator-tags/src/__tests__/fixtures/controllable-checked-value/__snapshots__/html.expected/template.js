import { checkedValueAttr as _checkedValueAttr, markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const checkedValue = "a";
  _write(`<input type=radio${_checkedValueAttr(checkedValue, "a")} value=a>${_markResumeNode(_scope0_id, "#input/0")}<input type=radio${_checkedValueAttr(checkedValue, "b")} value=b>${_markResumeNode(_scope0_id, "#input/1")}<input type=radio${_checkedValueAttr(checkedValue, "c")} value=c>${_markResumeNode(_scope0_id, "#input/2")}<span>${_escapeXML(checkedValue)}${_markResumeNode(_scope0_id, "#text/3")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0");
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko");