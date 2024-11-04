import { register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _checkbox from "./components/checkbox.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const checkedValue = ["a", "b"];
  const _childScope = _peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _register(function (_new_checkedValue) {
      checkedValue = _new_checkedValue;
    }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange", _scope0_id),
    value: "a"
  });
  const _childScope2 = _peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _register(function (_new_checkedValue2) {
      checkedValue = _new_checkedValue2;
    }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange_0", _scope0_id),
    value: "b"
  });
  const _childScope3 = _peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _register(function (_new_checkedValue3) {
      checkedValue = _new_checkedValue3;
    }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko_0/checkedValueChange_0", _scope0_id),
    value: "c"
  });
  _write(`<span>${_escapeXML(checkedValue)}${_markResumeNode(_scope0_id, "#text/3")}</span>`);
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope),
    "#childScope/1": _writeExistingScope(_childScope2),
    "#childScope/2": _writeExistingScope(_childScope3)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/template.marko");