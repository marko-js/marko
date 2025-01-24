import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const _by = function (c) {
    return c.id;
  };
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(input.children, (child, _index) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(_by(child, _index), _$.ensureScopeWithId(_scope1_id));
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {});
  }, _scope0_id, "#text/0");
  _$.writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);