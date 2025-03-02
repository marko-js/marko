import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const Parent = "div";
  const Child = "a";
  const el = _$.nodeRef();
  _$.write(`<div><svg>${_$.toString(input.value)}${_$.markResumeNode(_scope0_id, "#text/1")}`);
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/2", Child, {
    href: "#bar"
  }, _$.registerContent("__tests__/template.marko_2_renderer", () => {
    const _scope2_id = _$.nextScopeId();
    _$.write("Hi");
  }, _scope0_id));
  _$.write(`</svg><math>${_$.toString(input.value)}${_$.markResumeNode(_scope0_id, "#text/3")}`);
  const _dynamicScope2 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/4", Child, {
    href: "#bar"
  }, _$.registerContent("__tests__/template.marko_3_renderer", () => {
    const _scope3_id = _$.nextScopeId();
    _$.write("Hi");
  }, _scope0_id));
  _$.write("</math>");
  const _dynamicScope3 = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/5", Parent, {}, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.toString(input.value)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1_input_value/subscriber");
    _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "12:3");
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id));
  _$.write(`<button class=toggle-parent>Toggle Parent</button>${_$.markResumeNode(_scope0_id, "#button/6")}<button class=toggle-child>Toggle Child</button>${_$.markResumeNode(_scope0_id, "#button/7")}</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_Parent_Child");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_Child");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_Parent");
  _$.writeScope(_scope0_id, {
    input_value: input.value,
    Parent,
    Child,
    "#text/2!": _$.writeExistingScope(_dynamicScope),
    "#text/2(": _$.dynamicTagId(Child),
    "#text/4!": _$.writeExistingScope(_dynamicScope2),
    "#text/4(": _$.dynamicTagId(Child),
    "#text/5!": _$.writeExistingScope(_dynamicScope3),
    "#text/5(": _$.dynamicTagId(Parent)
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"],
    Parent: "1:5",
    Child: "2:5"
  });
  _$.resumeClosestBranch(_scope0_id);
});