import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const checked = false;
  _$.write(`<input${_$.controllable_input_checked(_scope0_id, "#input/0", checked, _$.register(_new_checked => {
    checked = _new_checked;
  }, "__tests__/template.marko_0/checkedChange", _scope0_id))} type=checkbox>${_$.markResumeNode(_scope0_id, "#input/0")}<span>${_$.escapeXML(String(checked))}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    checked: checked
  }, "__tests__/template.marko", 0, {
    checked: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);