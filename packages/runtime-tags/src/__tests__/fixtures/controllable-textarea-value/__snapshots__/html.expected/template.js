import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let value = "hello";
  _$.write(`<textarea>${_$.controllable_textarea_value(_scope0_id, "#textarea/0", value, _$.register(_new_value => {
    value = _new_value;
  }, "__tests__/template.marko_0/valueChange", _scope0_id))}</textarea>${_$.markResumeNode(_scope0_id, "#textarea/0")}<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});