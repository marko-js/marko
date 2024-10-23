import { register as _register, checkedAttr as _checkedAttr, markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const checked = false;
  _write(`<input type=checkbox${_checkedAttr(checked, _register(function (_new_checked) {
    checked = _new_checked;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko_0/checkedChange", _scope0_id), _scope0_id, "#input/0")}>${_markResumeNode(_scope0_id, "#input/0")}<span>${_escapeXML(String(checked))}${_markResumeNode(_scope0_id, "#text/1")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko_0");
  _writeScope(_scope0_id, {
    "checked": checked
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko");