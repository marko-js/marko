import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _input_value_closures = new Set();
  let Parent = "div";
  let Child = "a";
  const el = _$.nodeRef();
  _$.write(`<div><svg>${_$.toString(input.value)}${_$.markResumeNode(_scope0_id, "#text/1")}`);
  _$.dynamicTag(_scope0_id, "#text/2", Child, {
    href: "#bar"
  }, _$.registerContent("__tests__/template.marko_2_renderer", () => {
    const _scope2_id = _$.nextScopeId();
    _$.write("Hi");
  }, _scope0_id), 0, 1);
  _$.write(`</svg><math>${_$.toString(input.value)}${_$.markResumeNode(_scope0_id, "#text/3")}`);
  _$.dynamicTag(_scope0_id, "#text/4", Child, {
    href: "#bar"
  }, _$.registerContent("__tests__/template.marko_3_renderer", () => {
    const _scope3_id = _$.nextScopeId();
    _$.write("Hi");
  }, _scope0_id), 0, 1);
  _$.write("</math>");
  _$.dynamicTag(_scope0_id, "#text/5", Parent, {}, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.toString(input.value)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeSubscribe(_input_value_closures, _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id),
      "ClosureSignalIndex:input_value": 0
    }, "__tests__/template.marko", "12:3"));
    _$.resumeClosestBranch(_scope1_id);
  }, _scope0_id), 0, 1);
  _$.write(`<button class=toggle-parent>Toggle Parent</button>${_$.markResumeNode(_scope0_id, "#button/6")}<button class=toggle-child>Toggle Child</button>${_$.markResumeNode(_scope0_id, "#button/7")}</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_Parent_Child");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_Child");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_Parent");
  _$.writeScope(_scope0_id, {
    input_value: input.value,
    Parent,
    Child,
    "ClosureScopes:input_value": _input_value_closures
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"],
    Parent: "1:5",
    Child: "2:5"
  });
  _$.resumeClosestBranch(_scope0_id);
});