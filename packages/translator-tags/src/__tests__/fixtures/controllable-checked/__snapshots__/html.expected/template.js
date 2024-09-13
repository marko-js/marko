import { checkedAttr as _checkedAttr, markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const checked = false;
  _write(`<input${_checkedAttr(checked)}>${_markResumeNode(_scope0_id, "#input/0")}<span>${_escapeXML(String(checked))}${_markResumeNode(_scope0_id, "#text/1")}</span>`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko");