import _checkbox from "./components/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
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
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);