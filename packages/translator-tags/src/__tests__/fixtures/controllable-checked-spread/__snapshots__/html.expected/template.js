import { register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _checkbox from "./components/checkbox.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const checked = false;
  const _childScope = _peekNextScope();
  _checkbox({
    checked: checked,
    checkedChange: _register(function (_new_checked) {
      checked = _new_checked;
    }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/template.marko_0/checkedChange", _scope0_id)
  });
  _write(`<span>${_escapeXML(String(checked))}${_markResumeNode(_scope0_id, "#text/1")}</span>`);
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/template.marko");