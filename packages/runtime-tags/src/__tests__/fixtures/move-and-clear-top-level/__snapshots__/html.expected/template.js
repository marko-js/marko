import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _scope1_ = new Map();
  const _by = function (c) {
    return c.id;
  };
  _$.resumeSingleNodeForOf(input.children, (child, _index) => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(_by(child, _index), _$.ensureScopeWithId(_scope1_id));
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.debug(_$.writeScope(_scope1_id, {}), "__tests__/template.marko", "1:2", {
      "child": "1:6",
      "child_text": ["child.text", "1:6"]
    });
  }, _scope0_id, "#text/0");
  _$.debug(_$.writeScope(_scope0_id, {
    "#text/0(": _scope1_.size ? _scope1_ : undefined
  }), "__tests__/template.marko", 0);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);