import _checkbox from "./tags/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const checkedValue = ["a", "b"];
  const _checkedValueChange = _$.register(_new_checkedValue => {
    checkedValue = _new_checkedValue;
  }, "__tests__/template.marko_0/_checkedValueChange", _scope0_id);
  const _childScope = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange,
    value: "a"
  });
  const _childScope2 = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange,
    value: "b"
  });
  const _childScope3 = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: _checkedValueChange,
    value: "c"
  });
  _$.write(`<span>${_$.escapeXML(checkedValue)}${_$.markResumeNode(_scope0_id, "#text/3")}</span>`);
  _$.writeScope(_scope0_id, {
    _checkedValueChange: _checkedValueChange,
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2),
    "#childScope/2": _$.writeExistingScope(_childScope3)
  }, "__tests__/template.marko", 0, {
    _checkedValueChange: 0
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);