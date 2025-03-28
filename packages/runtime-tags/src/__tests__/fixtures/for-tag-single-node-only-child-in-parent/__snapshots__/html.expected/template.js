import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let children = [1];
  _$.write(`<div${_$.attr("data-children", children.length)}>`);
  _$.resumeSingleNodeForOf(children, () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("<div></div>");
  }, 0, _scope0_id, "#div/0", 1);
  _$.write("</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_children");
  _$.writeScope(_scope0_id, {
    children
  }, "__tests__/template.marko", 0, {
    children: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});