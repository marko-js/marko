import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const value = "b";
  _$.controllable_select_value(_scope0_id, "#select/0", value, _$.register(function (v) {
    value = v;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0/valueChange", _scope0_id), () => {
    _$.write(`<select><option${_$.optionValueAttr("a")}>A</option><option${_$.optionValueAttr("b")}>B</option><option${_$.optionValueAttr("c")}>C</option></select>`);
  });
  _$.write(`${_$.markResumeNode(_scope0_id, "#select/0")}<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0");
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko", _renderer);