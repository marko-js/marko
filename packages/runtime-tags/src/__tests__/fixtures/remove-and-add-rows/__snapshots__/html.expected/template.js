import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  const {
    children
  } = input;
  _$.write("<div>");
  const _by = function (c) {
    return c.id;
  };
  _$.resumeSingleNodeForOf(children, (child, _index) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(_by(child, _index), _$.ensureScopeWithId(_scope1_id));
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {}, "__tests__/template.marko", "3:4");
  }, _scope0_id, "#div/0", 1);
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    "LoopScopeMap:#div/0": _scope1_.size ? _scope1_ : undefined
  }, "__tests__/template.marko", 0);
});