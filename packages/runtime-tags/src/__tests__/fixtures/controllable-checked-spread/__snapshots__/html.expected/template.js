import _checkbox from "./tags/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const checked = false;
  const _childScope = _$.peekNextScope();
  _checkbox({
    checked: checked,
    checkedChange: _$.register(_new_checked => {
      checked = _new_checked;
    }, "__tests__/template.marko_0/checkedChange", _scope0_id)
  });
  _$.write(`<span>${_$.escapeXML(String(checked))}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch(_scope0_id);
});