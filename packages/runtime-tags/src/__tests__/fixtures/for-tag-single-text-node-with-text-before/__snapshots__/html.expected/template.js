import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  const children = [1];
  _$.write(`<div${_$.attr("data-children", children.length)}>Before `);
  _$.resumeForOf(children, (_list, _index) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(_index, _$.ensureScopeWithId(_scope1_id));
    _$.write("Child");
    _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "4:4");
  }, _scope0_id, "#text/1");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_children");
  _$.writeScope(_scope0_id, {
    children,
    "#text/1(": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0, {
    children: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});