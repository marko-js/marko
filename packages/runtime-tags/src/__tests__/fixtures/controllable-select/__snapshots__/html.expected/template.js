import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const value = "b";
  _$.controllable_select_value(_scope0_id, "#select/0", value, _$.register(function (v) {
    value = v;
  }, "__tests__/template.marko_0/valueChange", _scope0_id), () => {
    _$.write(`<select><option${_$.optionValueAttr("a")}>A</option><option${_$.optionValueAttr("b")}>B</option><option${_$.optionValueAttr("c")}>C</option></select>`);
  });
  _$.write(`${_$.markResumeNode(_scope0_id, "#select/0")}<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.debug(_$.writeScope(_scope0_id, {
    "value": value
  }), "__tests__/template.marko", 0, {
    "value": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);