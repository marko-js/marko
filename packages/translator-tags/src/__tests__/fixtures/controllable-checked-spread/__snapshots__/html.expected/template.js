import * as _$ from "@marko/runtime-tags/debug/html";
import _checkbox from "./components/checkbox.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const checked = false;
  const _childScope = _$.peekNextScope();
  _checkbox({
    checked: checked,
    checkedChange: _$.register(function (_new_checked) {
      checked = _new_checked;
    }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/template.marko_0/checkedChange", _scope0_id)
  });
  _$.write(`<span>${_$.escapeXML(String(checked))}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-spread/template.marko");