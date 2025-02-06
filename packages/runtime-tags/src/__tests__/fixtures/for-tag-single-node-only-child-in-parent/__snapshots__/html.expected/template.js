import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const children = [1];
  _$.write(`<div${_$.attr("data-children", children.length)}>`);
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(children, (_list, _index) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(_index, _$.ensureScopeWithId(_scope1_id));
    _$.write("<div></div>");
    _$.debug(_$.writeScope(_scope1_id, {}), "__tests__/template.marko", "3:4");
  }, _scope0_id, "#div/0", 1);
  _$.write("</div>");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_children");
  _$.debug(_$.writeScope(_scope0_id, {
    "children": children,
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  }), "__tests__/template.marko", 0, {
    "children": "1:6",
    "children_length": ["children.length", "1:6"]
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);